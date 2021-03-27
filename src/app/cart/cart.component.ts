import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  sumPrice;
  discountValue;
  discountRate;
  endTotal;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      email: '',
      newsletter: '',
    });
  }

  // ### Function to return discount rate and discount ###

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.sumPrice = 0;
    this.discountValue = 0;
    this.discountRate = 0;
    this.endTotal = 0;
    for (let i in this.items) {
      // console.log(this.items[i].price);
      this.sumPrice = this.sumPrice + this.items[i].price;
      console.log(this.sumPrice);
    }
    if (this.sumPrice > 500) {
      console.log('20% discount');
      this.discountValue = this.sumPrice * 0.2;
      this.discountRate = 20;
      this.endTotal = this.sumPrice - this.discountValue;
    } else if (this.sumPrice > 200) {
      console.log('10% discount');
      this.discountValue = this.sumPrice * 0.1;
      this.discountRate = 10;
      this.endTotal = this.sumPrice - this.discountValue;
    } else console.log('no discount');
  }

  onSubmit(customerData) {
    console.warn('Your order has been placed.', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
