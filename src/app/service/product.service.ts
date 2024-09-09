import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dessert } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Dessert[]>(this.url);
  }
}
