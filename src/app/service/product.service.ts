import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dessert } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Dessert[]>(this.url);
  }
}
