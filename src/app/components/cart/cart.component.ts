import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../model';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartProduct[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  isOrderPlaced = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalPrice();
      this.calculateTotalQuantity();
    });
  }

  addToCart(product: CartProduct): void {
    this.cartService.addToCart(product);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  calculateTotalQuantity(): void {
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  placeOrder(): void {
    this.cartService.placeOrder();
  }
}
