import { Component } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';
import { CartProduct } from '../../model';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css',
})
export class ConfirmOrderComponent {
  isOrderConfirmed = false;
  totalPrice = 0;

  cartItems: CartProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.isOrderPlaced$.subscribe((isOrderPlaced) => {
      if (isOrderPlaced) {
        this.isOrderConfirmed = true;
      }
    });

    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
    this.totalPrice = this.calculateTotalPrice();
  }

  startNewOrder(): void {
    this.cartService.clearCart();
    this.cartService.isOrderPlaced$.subscribe((isOrderPlaced) => {
      if (!isOrderPlaced) {
        this.isOrderConfirmed = false;
      }
    });
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
