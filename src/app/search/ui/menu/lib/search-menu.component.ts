import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavigationLink, PATHS } from '@baf/core';
import { NavComponent } from '@baf/ui/nav';

@Component({
  selector: 'baf-search-menu',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './search-menu.component.html',
  styleUrl: './search-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMenuComponent {
  readonly links: NavigationLink[] = [
    {
      label: 'Avia',
      route: PATHS.home,
      suffix: '10%',
    },
    {
      label: 'Hotels',
      route: PATHS.searchHotel,
    },
    {
      label: 'Tours',
      route: PATHS.searchTour,
    },
    {
      label: 'Railway',
      route: PATHS.searchRailway,
    },
  ];
}
