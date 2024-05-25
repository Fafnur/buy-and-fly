import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-icon-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
