import { Routes } from '@angular/router';

import { PATHS, withChildNavigation } from '@baf/core';

export const searchRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@baf/search/ui/layout').then((m) => m.SearchLayoutComponent),
    children: [
      {
        path: PATHS.searchAvia,
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
        path: PATHS.searchHotel,
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
        path: PATHS.searchTour,
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [],
      },
      {
        path: PATHS.searchRailway,
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('@baf/search/hotels/ui/form').then((m) => m.SearchHotelFormComponent),
            outlet: 'form',
          },
        ],
      },
    ].map(withChildNavigation(PATHS.search)),
  },
];
