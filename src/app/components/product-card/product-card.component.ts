import { Component, Input } from '@angular/core';
import { Dessert } from '../../model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: Dessert | undefined;

  constructor() {}
}
