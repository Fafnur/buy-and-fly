import { Routes } from '@angular/router';

import { SearchLayoutComponent } from '@baf/search/ui/layout';

export const searchRoutes: Routes = [
  {
    path: '',
    component: SearchLayoutComponent,
    children: [],
  },
];
