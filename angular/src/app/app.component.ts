import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

  constructor(private router : Router){}

  public handleBooks() : void{
    this.router.navigateByUrl("/books")
  }

  public handleLaptops(){
    this.router.navigateByUrl('/laptops');
  }

  public handleIpads(){
    this.router.navigateByUrl('/ipads')
  }

  public handlePhones(){
    this.router.navigateByUrl('/phones')
  }
}
