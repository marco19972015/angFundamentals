// The state for the application, things like the cart, and the logic 
// around the application state, should belong in services
import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

// Services don't contain directives, they contain Injectable decorators
@Injectable({
  // Having this set as root allows us to use the service in our ng application without the need to import
  providedIn: 'root'
})

// Think of a service as a JS class. 
export class CartService {
  // Basically we can add all the relevent object to a cart here
  cart: IProduct[] = [];

  constructor() { }
    
  add(product: IProduct) {
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }
}
