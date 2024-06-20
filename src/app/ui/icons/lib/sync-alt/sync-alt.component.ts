import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'baf-sync-alt',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './sync-alt.component.html',
  styleUrl: './sync-alt.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncAltComponent {}
