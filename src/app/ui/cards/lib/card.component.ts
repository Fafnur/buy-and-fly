import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-card',
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-card',
  },
})
export class CardComponent {}
