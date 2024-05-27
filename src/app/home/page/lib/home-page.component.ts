import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@baf/ui/container';

import { MustTakeComponent } from './must-take/must-take.component';
import { PromoComponent } from './promo/promo.component';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [ContainerComponent, PromoComponent, MustTakeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
