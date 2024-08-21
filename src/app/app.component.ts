import { Component } from '@angular/core';
import { CartService } from './service/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isOrderConfirmed = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.isOrderPlaced$.subscribe((isOrderPlaced) => {
      this.isOrderConfirmed = isOrderPlaced;
    });
  }
}
