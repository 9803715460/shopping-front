import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddproductComponent } from './shared/components/addproduct/addproduct.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ShowitemComponent } from './shared/components/showitem/showitem.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AddproductService } from './shared/services/addproduct.service';
import { ShowitmesService } from './shared/services/showitmes.service';
import { HttpClientModule } from '@angular/common/http';
import {  AppRoutes } from './shared/routes/routes.routing';



@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    CartComponent,
    HomeComponent,
    ShowitemComponent
],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AddproductService,ShowitmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
