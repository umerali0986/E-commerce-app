import { Component } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phones-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './phones-page.component.html',
  styleUrl: './phones-page.component.css'
})
export class PhonesPageComponent {

  
  phones : Product[];

  constructor(private productServices : ProductsService, private router : Router){}

  ngOnInit(): void {
    this.getPhones();
  }

  private getPhones():void{
    this.productServices.getPhones().subscribe(
      (response : Product[])=>{
        this.phones = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public displayProductDetails(productId : number){
    this.router.navigateByUrl(`/product/${productId}/details`);
  }
}
