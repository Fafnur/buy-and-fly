import { Routes } from '@angular/router';

import { PATHS, withChildNavigation } from '@baf/core';

export const searchRoutes: Routes = [
  {
    path: PATHS.searchAvia,
    loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/avia/ui/form').then((m) => m.SearchAviaFormComponent),
        outlet: 'form',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/results').then((m) => m.SearchResultsComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/filters').then((m) => m.SearchFiltersComponent),
        outlet: 'filters',
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
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/results').then((m) => m.SearchResultsComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/filters').then((m) => m.SearchFiltersComponent),
        outlet: 'filters',
      },
    ],
  },
  {
    path: PATHS.searchTour,
    loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/results').then((m) => m.SearchResultsComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/filters').then((m) => m.SearchFiltersComponent),
        outlet: 'filters',
      },
    ],
  },
  {
    path: PATHS.searchRailway,
    loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/railways/ui/form').then((m) => m.SearchRailwayFormComponent),
        outlet: 'form',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/results').then((m) => m.SearchResultsComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@baf/search/ui/filters').then((m) => m.SearchFiltersComponent),
        outlet: 'filters',
      },
    ],
  },
].map(withChildNavigation(PATHS.search));
