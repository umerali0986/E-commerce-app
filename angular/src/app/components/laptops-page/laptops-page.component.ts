import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../classes/product';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptops-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './laptops-page.component.html',
  styleUrl: './laptops-page.component.css'
})
export class LaptopsPageComponent implements OnInit{

  laptops : Product[];

  constructor(private productServices : ProductsService, private router : Router){}

  ngOnInit(): void {
    this.getLaptops();
  }

  private getLaptops():void{
    this.productServices.getLaptops().subscribe(
      (response : Product[])=>{
        this.laptops = response;
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
