import { Routes } from '@angular/router';

import { PATHS } from '@baf/core';

export const homeRoutes: Routes = [
  {
    path: PATHS.homeAvia,
    title: $localize`:Home Title:Buy & Fly - Flights with 10% cashback`,
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
    path: PATHS.homeHotels,
    title: $localize`:Home Title:Buy & Fly - Hotels with 10% cashback`,
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
    path: PATHS.homeTours,
    title: $localize`:Home Title:Buy & Fly - Tours with 10% cashback`,
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [],
  },
  {
    path: PATHS.homeRailways,
    title: $localize`:Home Title:Buy & Fly - Railways with 5% cashback`,
    loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/search/railways/ui/form').then((m) => m.SearchRailwayFormComponent),
        outlet: 'form',
      },
    ],
  },
];
