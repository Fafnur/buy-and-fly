import { Directive, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[baf-input]',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'baf-input-native',
  },
})
export class InputDirective {
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  readonly ngControl = inject(NgControl);
}
