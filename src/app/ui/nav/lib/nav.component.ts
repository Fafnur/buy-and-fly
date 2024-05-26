import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavigationLink, PathPipe } from '@baf/core';

@Component({
  selector: 'baf-nav',
  standalone: true,
  imports: [RouterLink, PathPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Input({ required: true }) links!: NavigationLink[];
}
