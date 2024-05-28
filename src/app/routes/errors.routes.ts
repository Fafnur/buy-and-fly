import { Routes } from '@angular/router';

export const errorsRoutes: Routes = [
  {
    path: 'permission-denied',
    title: 'Permission Denied',
    loadComponent: () => import('@baf/errors/permission-denied/page').then((m) => m.PermissionDeniedPageComponent),
  },
  {
    path: 'server-error',
    title: 'Internal Server Error',
    loadComponent: () => import('@baf/errors/server-error/page').then((m) => m.ServerErrorPageComponent),
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () => import('@baf/errors/not-found/page').then((m) => m.NotFoundPageComponent),
  },
];
