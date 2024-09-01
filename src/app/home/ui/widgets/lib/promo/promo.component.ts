import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { NavigationLink } from '@baf/core';
import { PATHS } from '@baf/core';
import { HeadlineComponent } from '@baf/ui/headline';
import { NavComponent } from '@baf/ui/nav';

@Component({
  selector: 'baf-promo',
  standalone: true,
  imports: [HeadlineComponent, NavComponent],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoComponent {
  readonly links: NavigationLink[] = [
    {
      route: PATHS.home,
      label: $localize`:Home Nav:Avia`,
      suffix: '10%',
    },
    {
      route: PATHS.homeHotels,
      label: $localize`:Home Nav:Hotels`,
      suffix: '10%',
    },
    {
      route: PATHS.homeTours,
      label: $localize`:Home Nav:Tours`,
      suffix: '4%',
    },
    {
      route: PATHS.homeRailways,
      label: $localize`:Home Nav:Railway`,
      suffix: '5%',
    },
  ];
}
