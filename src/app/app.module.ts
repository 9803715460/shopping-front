import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddproductComponent } from './shared/components/addproduct/addproduct.component';
import { AddproductService } from './shared/services/addproduct.service';
import { HttpClientModule } from '@angular/common/http';
import {  AppRoutes } from './shared/routes/routes.routing';



@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent
],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AddproductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
