import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-filtredproduct',
  imports: [FormsModule, CardComponent],
  templateUrl: './filtredproduct.component.html',
  styleUrl: './filtredproduct.component.css'
})
export class FiltredproductComponent {
   categoryname: string = '';
    filteredproducts!: Product[]
    products!: Product[];
     constructor(x: ProductsService){
      this.products = x.products;
     }
     filter(){
      this.filteredproducts = this.products.filter((product)=>
        product.category === this.categoryname)
     }
}
