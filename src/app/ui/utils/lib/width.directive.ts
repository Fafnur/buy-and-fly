import { Directive, HostBinding, input } from '@angular/core';

import { Width } from './types';

@Directive({
  selector: '[bafWidth]',
  standalone: true,
})
export class WidthDirective {
  readonly width = input<Width>(undefined, { alias: 'bafWidth' });

  @HostBinding('class.width-max') get isLeft(): boolean {
    return this.width() === 'max';
  }
}
