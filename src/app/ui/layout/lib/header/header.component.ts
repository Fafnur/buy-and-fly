import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@baf/core';
import { ContainerComponent } from '@baf/ui/container';
import { HomeComponent, LogoComponent } from '@baf/ui/icons';
import { AnchorComponent } from '@baf/ui/buttons';

@Component({
  selector: 'baf-header',
  standalone: true,
  imports: [LogoComponent, HomeComponent, ContainerComponent, RouterLink, PathPipe, AnchorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly paths = PATHS;
}
