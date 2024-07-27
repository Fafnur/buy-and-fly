import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'baf-label,label[baf-label]',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-label',
  },
})
export class LabelComponent {
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
}
