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

  cartItems: CartProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.isOrderPlaced$.subscribe((isOrderPlaced) => {
      if (isOrderPlaced) {
        this.isOrderConfirmed = true;
        console.log('Order placed successfully');
      }
    });

    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  startNewOrder(): void {
    this.cartService.clearCart();
    this.cartService.isOrderPlaced$.subscribe((isOrderPlaced) => {
      if (!isOrderPlaced) {
        this.isOrderConfirmed = false;
        console.log('Order cancelled');
      }
    });
  }
}
