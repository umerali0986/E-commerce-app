import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../classes/product';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent implements OnInit{

  books : Product[];

  constructor(private productService : ProductsService, private router : Router){}


  ngOnInit(): void {
   this.productService.getBooks().subscribe(
    (response : Product[]) => {
      this.books = response;
      console.log(this.books)
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
   )
  }


  public displayProductDetails(productId : number){
    this.router.navigateByUrl(`/product/${productId}/details`);
  }


}
