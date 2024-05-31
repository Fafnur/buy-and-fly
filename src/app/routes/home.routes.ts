import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/avia/ui/form').then((m) => m.SearchAviaFormComponent),
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
        loadComponent: () => import('@baf/search/hotels/ui/form').then((m) => m.SearchHotelFormComponent),
        outlet: 'form',
      },
    ],
  },
  {
    path: 'tours',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [],
  },
  {
    path: 'railways',
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [],
  },
];
