import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import type { NavigationLink } from '@baf/core';
import { PathPipe } from '@baf/core';

@Component({
  selector: 'baf-nav',
  standalone: true,
  imports: [RouterLink, PathPipe, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-nav',
  },
})
export class NavComponent {
  readonly links = input.required<NavigationLink[]>();
}
