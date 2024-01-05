import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[];

  constructor(){}
  
  ngOnInit(): void {
    this.listProducts = [
      {id: '1',title : 'PullandBear',quantity: 10, price: 20, like:0},
      {id: '2',title : 'Bershka',quantity: 20, price: 233, like:0},
      {id: '3',title : 'Zara',quantity: 33, price: 445, like:0}


    ];
  }
}
