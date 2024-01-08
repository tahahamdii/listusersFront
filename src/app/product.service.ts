import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productt } from './model/product2';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  getCarts(): Observable<Productt[]> {
    const url = `${this.apiUrl}/cart`;
    return this.http.get<Productt[]>(url);
  }
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  addProduct(product: any): Observable<any>{
    const addProductUrl = `${this.apiUrl}/products`;
    return this.http.post(addProductUrl,product);
  }
  getProducts(): Observable<Productt[]> {
    const url = `${this.apiUrl}/products`;
    return this.http.get<Productt[]>(url);
  }
  AddProductToCart(product: any): Observable<any> {
    const cartUrl = `${this.apiUrl}/cart`;
    return this.http.post(cartUrl, product);
  }
}
