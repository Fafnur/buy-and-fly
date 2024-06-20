import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-must-buy-hotel',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './must-buy-hotel.component.html',
  styleUrl: './must-buy-hotel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustBuyHotelComponent {}
