import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'baf-label,label[baf-label]',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrl: './label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-label',
  },
})
export class LabelComponent {
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
}
