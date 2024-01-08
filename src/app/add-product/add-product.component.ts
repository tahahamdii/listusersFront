import { Component } from '@angular/core';
import { Product } from '../model/product';
import { Productt } from '../model/product2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product: Productt = new Productt();

  constructor(private productService: ProductService){}

  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      response => {
        this.product = new Productt();
        alert('product added habibi')
      }
    )
  }

}
