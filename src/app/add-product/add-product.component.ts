import { Component } from '@angular/core';
import { Product } from '../model/product';
import { Productt } from '../model/product2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product: Productt = new Productt();

}
