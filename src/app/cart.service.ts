import { Injectable } from '@angular/core';
import { products } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [
    {
      adventure: 'West Coast Trail',
      province: 'British Columbia',
      description: "Arguably Canada's most famous hiking trail.",
      start: '02.04.21',
      duration: 7,
      price: 799,
      difficulty: 'easy',
      image: 'assets/images/01westCoastTrail.jpg',
    },
    {
      adventure: 'Killarney Park',
      province: 'Ontario',
      description: "Ontario's crown jewel of provincial parks.",
      start: '07.09.21',
      duration: 3,
      price: 299,
      difficulty: 'easy',
      image: 'assets/images/02killarneyPark.jpg',
    },
    {
      adventure: 'Plain of Six Glaciers Trail',
      province: 'Alberta',
      description: 'A breathtaking way to take in the Rocky Mountains.',
      start: '10.06.21',
      duration: 10,
      price: 999,
      difficulty: 'moderate',
      image: 'assets/images/03plainOfSixGlaciers.jpg',
    },
    {
      adventure: 'West Coast Trail',
      province: 'British Columbia',
      description: "Arguably Canada's most famous hiking trail.",
      start: '02.04.21',
      duration: 7,
      price: 799,
      difficulty: 'easy',
      image: 'assets/images/01westCoastTrail.jpg',
    },
    {
      adventure: 'Killarney Park',
      province: 'Ontario',
      description: "Ontario's crown jewel of provincial parks.",
      start: '07.09.21',
      duration: 3,
      price: 299,
      difficulty: 'easy',
      image: 'assets/images/02killarneyPark.jpg',
    },
    {
      adventure: 'Plain of Six Glaciers Trail',
      province: 'Alberta',
      description: 'A breathtaking way to take in the Rocky Mountains.',
      start: '10.06.21',
      duration: 10,
      price: 999,
      difficulty: 'moderate',
      image: 'assets/images/03plainOfSixGlaciers.jpg',
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
