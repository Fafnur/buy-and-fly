import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/form').then((m) => m.SearchFormComponent),
        outlet: 'form',
      },
    ],
  },
  {
    path: 'hotels',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/form').then((m) => m.SearchFormComponent),
        outlet: 'form',
      },
    ],
  },
  {
    path: 'tours',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/form').then((m) => m.SearchFormComponent),
        outlet: 'form',
      },
    ],
  },
  {
    path: 'railways',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/form').then((m) => m.SearchFormComponent),
        outlet: 'form',
      },
    ],
  },
];
