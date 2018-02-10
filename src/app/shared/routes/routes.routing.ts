import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from '../components/addproduct/addproduct.component';
import { ModuleWithProviders } from '@angular/core';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AddproductComponent,
   
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full'
  },
  

  
];
 
  export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

