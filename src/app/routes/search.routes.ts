import { Routes } from '@angular/router';

export const searchRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@baf/search/ui/layout').then((m) => m.SearchLayoutComponent),
    children: [
      {
        path: 'avia',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
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
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
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
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [],
      },
      {
        path: 'railways',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('@baf/search/hotels/ui/form').then((m) => m.SearchHotelFormComponent),
            outlet: 'form',
          },
        ],
      },
    ],
  },
];
