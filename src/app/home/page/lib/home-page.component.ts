import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@baf/ui/container';

import { MustTakeComponent } from './must-take/must-take.component';
import { PromoComponent } from './promo/promo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [ContainerComponent, PromoComponent, MustTakeComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
