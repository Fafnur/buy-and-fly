import type { Routes } from '@angular/router';

import { PATHS } from '@baf/core';

export const errorsRoutes: Routes = [
  {
    path: PATHS.permissionDenied,
    title: 'Permission Denied',
    loadComponent: () => import('@baf/errors/permission-denied/page').then((m) => m.PermissionDeniedPageComponent),
  },
  {
    path: PATHS.serverError,
    title: 'Internal Server Error',
    loadComponent: () => import('@baf/errors/server-error/page').then((m) => m.ServerErrorPageComponent),
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () => import('@baf/errors/not-found/page').then((m) => m.NotFoundPageComponent),
  },
];
