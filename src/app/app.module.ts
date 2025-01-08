import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInvoiceComponent } from './Pages/customer-invoice/customer-invoice.component';
import { ProductListComponent } from './Pages/Common/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceCreateComponent } from './Pages/invoice-create/invoice-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInvoiceComponent,
    ProductListComponent,
    InvoiceCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
