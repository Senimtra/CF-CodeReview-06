import { Injectable } from '@angular/core';
import { products } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [
    {
      adventure: 'Bruce Trail',
      province: 'Ontario',
      description:
        'A protected respite in the most populous part of the country.',
      start: '07.06.21',
      duration: 4,
      price: 399,
      difficulty: 'moderate',
      image: 'assets/images/06bruceTrail.jpg',
    },
  ];

  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItemCount(): number {
    return this.items.length;
  }
}
