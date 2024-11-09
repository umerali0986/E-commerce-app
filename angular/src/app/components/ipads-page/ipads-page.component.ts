import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipads-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ipads-page.component.html',
  styleUrl: './ipads-page.component.css'
})
export class IpadsPageComponent implements OnInit{
  
  ipads : Product[];

  constructor(private productServices : ProductsService, private router : Router){}

  ngOnInit(): void {
    this.getIpads();
  }

  private getIpads():void{
    this.productServices.getIpads().subscribe(
      (response : Product[])=>{
        this.ipads = response;
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
