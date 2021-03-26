import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    HomePageComponent,
    BlogPageComponent,
    TravelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
