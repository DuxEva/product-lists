import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { CartCardComponent } from './components/cart/cart-card/cart-card.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { ConfirmOrderCardComponent } from './components/confirm-order/confirm-order-card/confirm-order-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    CartComponent,
    CartCardComponent,
    ConfirmOrderComponent,
    ConfirmOrderCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
