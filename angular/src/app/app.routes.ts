import { Routes } from '@angular/router';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { LaptopsPageComponent } from './components/laptops-page/laptops-page.component';
import { IpadsPageComponent } from './components/ipads-page/ipads-page.component';
import { PhonesPageComponent } from './components/phones-page/phones-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {path:"product/:id/details",component:ProductDetailsComponent},
    {path:"books",component:BooksPageComponent},
    {path:"laptops",component:LaptopsPageComponent},
    {path:"ipads",component:IpadsPageComponent},
    {path:"phones",component:PhonesPageComponent},
    
];
