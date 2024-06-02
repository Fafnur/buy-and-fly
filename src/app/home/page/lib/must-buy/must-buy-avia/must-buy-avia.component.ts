import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-must-buy-avia',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './must-buy-avia.component.html',
  styleUrl: './must-buy-avia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustBuyAviaComponent {}
