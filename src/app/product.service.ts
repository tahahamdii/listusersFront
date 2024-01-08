import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  addProduct(product: any): Observable<any>{
    const addProductUrl = `${this.apiUrl}/products`;
    return this.http.post(addProductUrl,product);
  }
}
