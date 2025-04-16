import { Component,input } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Product>()
}
