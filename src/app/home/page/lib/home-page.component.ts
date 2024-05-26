import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavigationLink, PATHS } from '@baf/core';
import { SearchFormComponent } from '@baf/search/ui/form';
import { ContainerComponent } from '@baf/ui/container';
import { HeadlineComponent } from '@baf/ui/headline';
import { NavComponent } from '@baf/ui/nav';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [SearchFormComponent, ContainerComponent, HeadlineComponent, NavComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
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
