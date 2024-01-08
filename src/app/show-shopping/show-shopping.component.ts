import { Component } from '@angular/core';
import { Productt } from '../model/product2';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css']
})
export class ShowShoppingComponent {
  products: Productt[] = [];
  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit()');
    this.fetchData();
  }
  fetchData(): void {
    this.productService.getCarts()
    .subscribe((data:any) => {
      console.log('data',data);
      this.products = data;
    })
  }

}
