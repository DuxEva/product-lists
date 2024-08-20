import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { Dessert } from '../../model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Dessert[] = [];
  subcription!: Subscription

  constructor(private productService: ProductService) {}

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
