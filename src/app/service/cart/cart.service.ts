import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartProduct[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  addToCart(product: CartProduct) {
    const items = this.cartItems.getValue();
    const existingProductIndex = items.findIndex(
      (item) => item.product.name === product.product.name
    );

    if (existingProductIndex >= 0) {
      items[existingProductIndex].quantity += product.quantity;
    } else {
      items.push(product);
    }

    this.cartItems.next(items);
  }

  removeFromCart(product: CartProduct) {
    let items = this.cartItems.getValue();
    items = items.filter((item) => item.product.name !== product.product.name);

    this.cartItems.next(items);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getTotalPrice(): number {
    const items = this.cartItems.getValue();
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
