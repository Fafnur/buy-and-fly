import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

import { InputMaskDirective } from './input-mask.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[baf-input]',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-input',
  },
  hostDirectives: [
    {
      directive: InputMaskDirective,
      inputs: ['mask'],
    },
  ],
})
export class InputComponent {
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  readonly ngControl = inject(NgControl);
}
