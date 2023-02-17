import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsCategoriesComponent } from './components/products-categories/products-categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ProductComponent } from './components/product/product.component';
import { CatComponent } from './components/cat/cat.component';


const routes:Routes=[
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'products',component:ProductsCategoriesComponent},
  {path:'products/:product',component:ProductDetailsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    LoginPageComponent,
    ProductsCategoriesComponent,
    ProductDetailsComponent,
    ProductComponent,
    CatComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
