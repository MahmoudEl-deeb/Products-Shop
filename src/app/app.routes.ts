import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadComponent:()=> import('./home/home.component').then((c)=>
  c.HomeComponent)
  },
  { path: 'about', loadComponent:()=> import('./about/about.component').then((c)=>
  c.AboutComponent)
  },
  { path: 'contact', loadComponent: ()=> import('./contact/contact.component').then((c)=>
  c.ContactComponent)},
  { path: 'product', loadComponent:()=> import('./product/product.component').then((c)=>
    c.ProductComponent)
  },
  { path: '**', loadComponent: ()=> import('./pagenotfound/pagenotfound.component').then((c) =>
    c.PagenotfoundComponent)}


];
