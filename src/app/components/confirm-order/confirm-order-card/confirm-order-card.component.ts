import { Component, Input } from '@angular/core';
import { CartProduct } from '../../../model';
import { CartService } from '../../../service/cart/cart.service';

@Component({
  selector: 'app-confirm-order-card',
  templateUrl: './confirm-order-card.component.html',
  styleUrl: './confirm-order-card.component.css',
})
export class ConfirmOrderCardComponent {
  @Input() product!: CartProduct;

  constructor(private cartService: CartService) {}
}
