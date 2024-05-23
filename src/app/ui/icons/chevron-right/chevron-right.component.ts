import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'baf-chevron-right',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './chevron-right.component.html',
  styleUrl: './chevron-right.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronRightComponent {}
