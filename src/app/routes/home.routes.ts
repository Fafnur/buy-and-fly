import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
  },
];
