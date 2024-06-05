import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-must-buy-tour',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './must-buy-tour.component.html',
  styleUrl: './must-buy-tour.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustBuyTourComponent {}
