import { Routes } from '@angular/router';

import { PATHS } from '@baf/core';

export const documentsRoutes: Routes = [
  {
    path: PATHS.rules,
    title: $localize`:Documents Rules:Rules for using the site`,
    loadComponent: () => import('@baf/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.terms,
    title: $localize`:Documents Terms:Conditions for participation in the program`,
    loadComponent: () => import('@baf/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.documents,
    title: $localize`:Documents All:Documents`,
    loadComponent: () => import('@baf/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.faq,
    title: $localize`:Documents FAQ:FAQ`,
    loadComponent: () => import('@baf/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.cards,
    title: $localize`:Cards:Application`,
    loadComponent: () => import('@baf/development/page').then((m) => m.DevelopmentPageComponent),
  },
];
