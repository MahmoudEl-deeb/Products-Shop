import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

interface Product {
  name: String,
  image: String,
  price: String
}
@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products: Product[]= [
    {
      name: "product1",
      image: "./photoes/camera.jpg",
      price: "1000 LE",
    },
    {
      name: "product2",
      image: "./photoes/airpods.jpg",
      price: "2000 LE",
    },
    {
      name: "product3",
      image: "./photoes/watch.jpg",
      price: "3000 LE",
    },
    {
      name: "product4",
      image: "./photoes/laptop.jpg",
      price: "4000 LE",
    },
    {
      name: "product5",
      image: "./photoes/mobile.jpg",
      price: "5000 LE",
    },
    {
      name: "product6",
      image: "./photoes/tv.jpg",
      price: "6000 LE",
    }
  ]
}
