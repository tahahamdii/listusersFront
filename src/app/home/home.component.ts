import { Component } from '@angular/core';
import { Productt } from '../model/product2';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Productt[] = [] ;

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void{
    this.fetchData();

  }

  private fetchData(): void{
    this.productService.getProducts()
    .subscribe((data: Productt[]) =>{
      this.products = data;
    });
  }
  buyProduct(product: Productt): void{

  }
  viewDetails(product: Productt): void {
    this.router.navigate(['/details', product.id]);
  }

}
