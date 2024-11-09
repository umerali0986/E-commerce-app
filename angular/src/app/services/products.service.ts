import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl : string = "http://localhost:9000/product";

  constructor(private http : HttpClient) { }

  public getBooks() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/books`);
  } 

  public getLaptops(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/laptops`);
  }

  public getIpads(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/ipads`);
  }

  public getPhones(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/phones`);
  }

  public getProductById(productId : number) : Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${productId}`);
  }
}
