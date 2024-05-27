import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeadlineComponent } from '@baf/ui/headline';

@Component({
  selector: 'baf-must-take',
  standalone: true,
  imports: [HeadlineComponent],
  templateUrl: './must-take.component.html',
  styleUrl: './must-take.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustTakeComponent {}
