import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[baf-input]',
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-input',
  },
})
export class InputComponent {
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  readonly ngControl = inject(NgControl);
}
