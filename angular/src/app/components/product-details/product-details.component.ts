import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../classes/product';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product : Product;

  productCategory : string;

  constructor(private productServices : ProductsService, 
              private activeRoute : ActivatedRoute,
              private route : Router){}

  ngOnInit(): void {
    this.getCurrentProduct();
  }

  private getCurrentProduct() {
    let hasProductId = this.activeRoute.snapshot.paramMap.has('id');

    if(hasProductId){
      const productId = +this.activeRoute.snapshot.paramMap.get('id');
      this.productServices.getProductById(productId).subscribe(
        (response : Product)=>{
          this.product = response;

          if(this.product.categoryId === 1){
            this.productCategory = 'Books';
          }
          else if(this.product.categoryId === 2){
            this.productCategory = 'Laptops'
          }
          else if(this.product.categoryId === 3){
            this.productCategory = 'Ipads'
          }
          else if(this.product.categoryId === 4){
            this.productCategory = 'Phone'
          }
        }
      ),
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    }
  }

  handleBackToProduct(){
    if(this.productCategory === 'Books'){
      this.route.navigateByUrl('/books');
    }
    else if(this.productCategory === 'Laptops'){
      this.route.navigateByUrl('/laptops');
    }
    else if(this.productCategory === 'Ipads'){
      this.route.navigateByUrl('/ipads');
    }
    else if(this.productCategory === 'Phone'){
      this.route.navigateByUrl('/phones');
    }
  }
}
