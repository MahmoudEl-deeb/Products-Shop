import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   products!: Product[];
   constructor(x: ProductsService){
    this.products = x.products;
   }
}
