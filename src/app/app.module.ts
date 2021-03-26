import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductDetailsComponent } from './product-details/product-details.component';

import { CartComponent } from './cart/cart.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    ProductListComponent,
    HeroComponent,

    NavbarComponent,

    ProductDetailsComponent,

    CartComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
