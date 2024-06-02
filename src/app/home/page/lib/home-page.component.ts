import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@baf/ui/container';

import { MustBuyComponent } from './must-buy/must-buy.component';
import { PromoComponent } from './promo/promo.component';
import { TravelingComponent } from './traveling/traveling.component';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, PromoComponent, MustBuyComponent, TravelingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
