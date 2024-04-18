import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./feature/products/products.component'),
  },
  {
    path: 'products-detail/:id',
    loadComponent: () => import('./feature/products/details/details.component'),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./feature/checkout/checkout.component'),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
