import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  itemCount: number;

  constructor(private CartService: CartService) {
    this.itemCount = this.updateCount();
  }

  ngDoCheck(): void {
    this.itemCount = this.updateCount();
  }

  updateCount(): number {
    return this.CartService.getItemCount();
  }

  ngOnInit(): void {}
}
