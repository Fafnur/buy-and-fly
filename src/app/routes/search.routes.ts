import { Routes } from '@angular/router';

import { PATHS, withChildNavigation } from '@baf/core';

export const searchRoutes: Routes = [
  {
    path: PATHS.searchAvia,
    title: $localize`:Search Page:Search for cheap flights`,
    loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/avia/ui/form').then((m) => m.SearchAviaFormComponent),
        outlet: 'form',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/avia/ui/results').then((m) => m.SearchResultsAviaComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/avia/ui/filters').then((m) => m.SearchFiltersAviaComponent),
        outlet: 'filters',
      },
    ],
  },
  {
    path: PATHS.searchHotel,
    title: $localize`:Search Page:Search for cheap hotels`,
    loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/hotels/ui/form').then((m) => m.SearchHotelFormComponent),
        outlet: 'form',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/hotels/ui/results').then((m) => m.SearchHotelsResultComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/hotels/ui/filters').then((m) => m.SearchFiltersHotelsComponent),
        outlet: 'filters',
      },
    ],
  },
  {
    path: PATHS.searchTour,
    title: $localize`:Search Page:Search for cheap tours`,
    loadComponent: () => import('@baf/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.searchRailway,
    title: $localize`:Search Page:Search for cheap railways`,
    loadComponent: () => import('@baf/development/page').then((m) => m.DevelopmentPageComponent),
  },
].map(withChildNavigation(PATHS.search));
