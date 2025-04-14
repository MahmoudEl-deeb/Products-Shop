import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Category{
  id: number,
  name: string,
  description: string,
  image: string
}
@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Devices and gadgets',
      image: '/photoes/Electronics.jpg'
    },
    {
      id: 2,
      name: 'Books',
      description: 'Various genres of books',
      image: '/photoes/books.jpg'
    },
    {
      id: 3,
      name: 'Sports',
      description: 'Keep fit and active',
      image: '/photoes/sports.avif'
    }
  ]
}
