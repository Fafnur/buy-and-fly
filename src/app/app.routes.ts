import { Routes } from '@angular/router';

import { FooterComponent, HeaderComponent, LayoutComponent } from '@baf/ui/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header',
      },
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer',
      },
      {
        path: '',
        loadComponent: () => import('@baf/home/page').then((m) => m.HomePageComponent),
      },
      {
        path: 'search',
        loadComponent: () => import('@baf/search/page').then((m) => m.SearchPageComponent),
      },
    ],
  },
];
