import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'baf-star',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-star',
  },
})
export class StarComponent {}
