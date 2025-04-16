import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FiltredproductComponent } from '../filtredproduct/filtredproduct.component';

@Component({
  selector: 'app-product',
  imports: [CardComponent, FiltredproductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {

  products!: Product[];
   constructor(x: ProductsService){
    this.products = x.products;
   }

}
