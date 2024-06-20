import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'baf-icon-logo',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
