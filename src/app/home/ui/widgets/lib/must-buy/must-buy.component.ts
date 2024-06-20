import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeadlineComponent } from '@baf/ui/headline';

import { MustBuyAviaComponent } from './must-buy-avia/must-buy-avia.component';
import { MustBuyHotelComponent } from './must-buy-hotel/must-buy-hotel.component';
import { MustBuyTourComponent } from './must-buy-tour/must-buy-tour.component';

@Component({
  selector: 'baf-must-buy',
  standalone: true,
  imports: [HeadlineComponent, MustBuyAviaComponent, MustBuyHotelComponent, MustBuyTourComponent],
  templateUrl: './must-buy.component.html',
  styleUrl: './must-buy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustBuyComponent {}
