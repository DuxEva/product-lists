import { Component, Input } from '@angular/core';
import { CartProduct } from '../../../model';

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
}
