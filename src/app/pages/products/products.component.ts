import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { map, Observable, Subscription } from 'rxjs';
import { CartProduct, Dessert } from '../../model';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Dessert[] = [];
  subcription!: Subscription;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.subcription = this.productService
      .getProducts()
      .subscribe((data: Dessert[]) => {
        this.products = data;
      });
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
