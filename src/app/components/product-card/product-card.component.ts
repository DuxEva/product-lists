import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Dessert, ImageSize, CartProduct } from '../../model';
import { map, Observable, Subscription } from 'rxjs';
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
      const cartProduct: CartProduct = {
        product: this.product,
        quantity: 1,
      };
      this.cartService.addToCart(cartProduct);
    }
  }

  incrementQuantity() {
    if (this.product) {
      this.cartService.incrementQuantity(this.product);
    }
  }

  decrementQuantity() {
    if (this.product) {
      this.cartService.decrementQuantity(this.product);
    }
  }

  getProductQuantity(): Observable<number> {
    return this.cartService.cartItems$.pipe(
      map((items: CartProduct[]) => {
        const item = items.find((i) => i.product.id === this.product?.id);
        return item ? item.quantity : 0;
      })
    );
  }

  isInCart(product: Dessert): Observable<boolean> {
    return this.cartService.cartItems$.pipe(
      map((items: CartProduct[]) =>
        items.some((item: CartProduct) => item.product.id === product.id)
      )
    );
  }

  ngOnDestroy() {
    if (this.imageSrcSubscription) {
      this.imageSrcSubscription.unsubscribe();
    }
  }
}
