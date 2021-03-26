import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { removeSummaryDuplicates } from '@angular/compiler';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  sumPrice;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.sumPrice = 0;
    for (let i in this.items) {
      // console.log(this.items[i].price);
      this.sumPrice = this.sumPrice + this.items[i].price;
      console.log(this.sumPrice);
    }
  }

  onSubmit(customerData) {
    console.warn('Your order has been placed.', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
