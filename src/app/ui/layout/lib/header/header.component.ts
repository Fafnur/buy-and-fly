import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContainerComponent } from '@baf/ui/container';
import { HomeComponent, LogoComponent } from '@baf/ui/icons';

@Component({
  selector: 'baf-header',
  standalone: true,
  imports: [LogoComponent, HomeComponent, ContainerComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
