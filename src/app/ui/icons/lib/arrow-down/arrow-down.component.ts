import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'baf-arrow-down',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './arrow-down.component.html',
  styleUrl: './arrow-down.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowDownComponent {}
