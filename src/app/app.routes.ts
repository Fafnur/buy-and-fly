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
        loadChildren: () => import('./routes/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: 'search',
        loadChildren: () => import('./routes/search.routes').then((m) => m.searchRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/errors.routes').then((m) => m.errorsRoutes),
      },
    ],
  },
];
