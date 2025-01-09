import { Component } from '@angular/core';
import{UserServiceService} from './../Services/user-service.service'

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent {

  constructor(private userServices: UserServiceService) { }

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
      product => product.id.toString() === this.invoiceItems[index].product_id
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
    let invoiceItemsDTO = [];
    invoiceItemsDTO=this.invoiceItems.map(item => {return {ProductId:item.product_id,Quantity:item.quantity,Price: item.price,Discount: item.discount}})
    console.log('Invoice Saved', this.invoiceItems);
   // this.userServices.postPurchaseData(invoiceItemsDTO);
   this.userServices.postPurchaseData(invoiceItemsDTO).subscribe({
    next: (response) => {
      console.log('Invoice created successfully:', response);     
    },
    error: (error) => {
      console.error('Error creating invoice:', error);
    },
    complete: () => {
      console.log('API call completed.');
    }
  });
  }

 
  isValidNumber(value: string): boolean {
    return !isNaN(parseFloat(value)) && value.trim() !== '';
  }
}
