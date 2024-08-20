import { Component, Input } from '@angular/core';
import { CartProduct } from '../../../model';
import { CartService } from '../../../service/cart/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
})
export class CartCardComponent {
  @Input() product: CartProduct = {
    product: {
      name: 'pizza',
      category: '',
      price: 5.34,
      image: {
        thumbnail: '',
        mobile: '',
        tablet: '',
        desktop: '',
      },
    },
    quantity: 5,
  };

  constructor(private cartService: CartService) {}

  removeFromCart(product: CartProduct): void {
    this.cartService.removeFromCart(product);
  }
}
