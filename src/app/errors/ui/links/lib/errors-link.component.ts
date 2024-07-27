import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { NavigationLink } from '@baf/core';
import { PATHS } from '@baf/core';
import { NavComponent } from '@baf/ui/nav';

@Component({
  selector: 'baf-errors-links',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './errors-link.component.html',
  styleUrls: ['./errors-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsLinkComponent {
  readonly links: NavigationLink[] = [
    {
      route: PATHS.home,
      label: 'home',
    },
    {
      route: PATHS.documents,
      label: 'Documents',
    },
  ];
}
