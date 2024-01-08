import { Component } from '@angular/core';
import { Productt } from '../model/product2';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  product: Productt = new Productt();

  constructor(private route: ActivatedRoute,
    private productService: ProductService){

    }

    ngOnInit(){
      this.route.paramMap.subscribe(params => {
        const productId = params.get('productId');
        if(productId){
          this.fetchProductDetails(productId);
        }
      });
    }
  fetchProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe({
      next: (response : Productt) => {
        this.product = response;

      },
      error: (err: any) => console.error(err),
    })
  }

}
