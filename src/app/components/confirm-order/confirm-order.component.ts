import { Component } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';
import { CartProduct } from '../../model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css',
  animations: [
    trigger('popUpAnimation', [
      state('void', style({ transform: 'scale(0)' })),
      state('*', style({ transform: 'scale(1)' })),
      transition('void => *', animate('300ms ease-out')),
    ]),
  ],
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
