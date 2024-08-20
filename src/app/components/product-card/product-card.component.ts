import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Dessert, ImageSize, CartProduct } from '../../model';
import { Subscription } from 'rxjs';
import { ImageChangeService } from '../../service/image-change/image-change.service';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() product: Dessert | undefined;
  imageSrcSubscription: Subscription | undefined;
  imageSrc: ImageSize = 'desktop';

  constructor(
    private imageChangeService: ImageChangeService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.imageSrcSubscription = this.imageChangeService.imageSrc$.subscribe(
      (src) => {
        this.imageSrc = src as ImageSize;
      }
    );
  }

  addToCart() {
    if (this.product) {
      console.log('hello', this.product);
      const cartProduct: CartProduct = {
        product: this.product,
        quantity: 1,
      };
      this.cartService.addToCart(cartProduct);
    }
  }

  ngOnDestroy() {
    if (this.imageSrcSubscription) {
      this.imageSrcSubscription.unsubscribe();
    }
  }
}
