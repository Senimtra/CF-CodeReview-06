import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewPageComponent } from './review-page/review-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FootbarComponent } from './footbar/footbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeroComponent,
    NavbarComponent,
    HomePageComponent,
    BlogPageComponent,
    ProductDetailsComponent,
    CartComponent,
    ReviewPageComponent,
    CarouselComponent,
    FootbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
