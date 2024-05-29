import { Directive, HostBinding, input } from '@angular/core';

import { Align } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[align]',
  standalone: true,
})
export class AlignDirective {
  readonly align = input<Align>('left');

  @HostBinding('class.align-left') get isLeft(): boolean {
    return this.align() === 'left';
  }

  @HostBinding('class.align-center') get isCenter(): boolean {
    return this.align() === 'center';
  }

  @HostBinding('class.align-right') get isRight(): boolean {
    return this.align() === 'right';
  }
}
