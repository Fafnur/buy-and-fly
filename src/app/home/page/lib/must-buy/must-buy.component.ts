import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeadlineComponent } from '@baf/ui/headline';

@Component({
  selector: 'baf-must-buy',
  standalone: true,
  imports: [HeadlineComponent],
  templateUrl: './must-buy.component.html',
  styleUrl: './must-buy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustBuyComponent {}
