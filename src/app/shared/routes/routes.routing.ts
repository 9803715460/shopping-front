import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from '../components/addproduct/addproduct.component';
import { ModuleWithProviders } from '@angular/core';
import { CartComponent } from '../components/cart/cart.component';
import { HomeComponent } from '../components/home/home.component';
import { ShowitemComponent } from '../components/showitem/showitem.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AddproductComponent,
   
  },
  {
    path: 'viewcart',
    component: CartComponent,
   
  },
  {
    path: 'home',
    component: HomeComponent,
   
  },
  {
    path: 'showitems/:product',
    component: ShowitemComponent,
   
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full'
  },
  

  
];
 
  export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

