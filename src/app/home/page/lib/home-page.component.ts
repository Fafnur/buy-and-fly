import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@baf/ui/container';
import { SectionComponent } from '@baf/ui/section';

import { ConnectComponent } from './connect/connect.component';
import { ConvenientWithUsComponent } from './convenient-with-us/convenient-with-us.component';
import { MustBuyComponent } from './must-buy/must-buy.component';
import { PromoComponent } from './promo/promo.component';
import { TravelingComponent } from './traveling/traveling.component';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    SectionComponent,
    PromoComponent,
    MustBuyComponent,
    TravelingComponent,
    ConvenientWithUsComponent,
    ConnectComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
