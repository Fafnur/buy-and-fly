import { Routes } from '@angular/router';

import { LayoutComponent } from '@baf/ui/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
      },
    ],
  },
];
