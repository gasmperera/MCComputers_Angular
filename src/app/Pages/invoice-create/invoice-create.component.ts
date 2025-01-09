import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent {


  invoiceItems = [
    { 
      product_id: '', 
      price:'', 
      quantity: '', 
      discount: '', 
      amount: '' 
    }
  ];

  // Mock product data
  products = [
    {
      'id':1,
      'name':'HP Keyboard',
      'price':1500
    },
    {
      'id':2,
      'name':'Dell Keyboard',
      'price':2500
    },
    {
      'id':3,
      'name':'HP Optical Mouse',
      'price':1850
    },
    {
      'id':4,
      'name':'Dell Mouse',
      'price':2200
    }
  ];

  total_amount = 0;

  addItem() {
    this.invoiceItems.push(
      {
        product_id: '', 
        price: '', 
        quantity: '', 
        discount: '', 
        amount: '' 
      }
    );
  }

  removeItem(index: number) {
    this.invoiceItems.splice(index, 1);
    this.setLineItemTotal(index);
  }

  // Set product price based on selected product
  setProductPrice(index: number) {
    const selectedProduct = this.products.find(
      product => product.id === this.invoiceItems[index].product_id
    );
    if (selectedProduct) {
      this.invoiceItems[index].price = selectedProduct.price.toString();
    }

    this.setLineItemTotal(index);
  }

  // Calculate line item total based on price, quantity, and discount
  setLineItemTotal(index: number) {
    const currentInvoiceItem = this.invoiceItems[index];
    
    const price = parseFloat(currentInvoiceItem.price) || 0;
    const quantity = parseFloat(currentInvoiceItem.quantity) || 0;
    const discount = parseFloat(currentInvoiceItem.discount) || 0;

    currentInvoiceItem.amount = (price * quantity * (1 - discount / 100)).toFixed(2);

    this.total_amount = this.invoiceItems.reduce(
      (total, item) => total + (parseFloat(item.amount) || 0),
      0
    );
  }  

  saveInvoice() {
    console.log('Invoice Saved', this.invoiceItems);
    // Perform the save action here, like sending data to an API
  }

 
  isValidNumber(value: string): boolean {
    return !isNaN(parseFloat(value)) && value.trim() !== '';
  }
}
