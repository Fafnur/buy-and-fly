import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@baf/ui/container';

import { MustBuyComponent } from './must-buy/must-buy.component';
import { PromoComponent } from './promo/promo.component';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [ContainerComponent, PromoComponent, MustBuyComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
