import { Routes } from '@angular/router';

import { SearchLayoutComponent } from '@baf/search/ui/layout';

export const searchRoutes: Routes = [
  {
    path: '',
    component: SearchLayoutComponent,
    children: [
      {
        path: 'avia',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [],
      },
      {
        path: 'hotels',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [],
      },
      {
        path: 'tours',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [],
      },
      {
        path: 'railways',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [],
      },
    ],
  },
];
