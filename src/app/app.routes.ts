import { Routes } from '@angular/router';

import { PATHS } from '@baf/core';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@baf/ui/layout').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/ui/layout').then((m) => m.HeaderComponent),
        outlet: 'header',
      },
      {
        path: '',
        loadComponent: () => import('@baf/ui/layout').then((m) => m.FooterComponent),
        outlet: 'footer',
      },
      {
        path: '',
        loadChildren: () => import('./routes/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: PATHS.search,
        loadChildren: () => import('./routes/search.routes').then((m) => m.searchRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/errors.routes').then((m) => m.errorsRoutes),
      },
    ],
  },
];
