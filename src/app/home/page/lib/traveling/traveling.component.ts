import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeadlineComponent } from '@baf/ui/headline';
import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-traveling',
  standalone: true,
  imports: [TitleComponent, HeadlineComponent],
  templateUrl: './traveling.component.html',
  styleUrl: './traveling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelingComponent {}
