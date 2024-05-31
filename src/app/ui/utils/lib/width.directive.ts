import { Directive, HostBinding, input } from '@angular/core';

import { Width } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[width]',
  standalone: true,
})
export class WidthDirective {
  readonly width = input<Width>();

  @HostBinding('class.width-max') get isLeft(): boolean {
    return this.width() === 'max';
  }
}
