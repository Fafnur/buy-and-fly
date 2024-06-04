import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'baf-arrow-up',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './arrow-up.component.html',
  styleUrl: './arrow-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowUpComponent {}
