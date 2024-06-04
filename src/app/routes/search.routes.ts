import { Routes } from '@angular/router';

import { PATHS, withChildNavigation } from '@baf/core';

export const searchRoutes: Routes = [
  {
    path: PATHS.searchAvia,
    loadComponent: () => import('@baf/search/ui/layout').then((m) => m.SearchLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/avia/ui/form').then((m) => m.SearchAviaFormComponent),
        outlet: 'form',
      },
    ],
  },
].map(withChildNavigation(PATHS.search));
