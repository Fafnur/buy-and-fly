import { Directive, HostBinding, Input } from '@angular/core';

import { Align } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[align]',
  standalone: true,
})
export class AlignDirective {
  @Input() align: Align = 'left';

  @HostBinding('class.baf-align-left') get isLeft(): boolean {
    return this.align === 'left';
  }

  @HostBinding('class.baf-align-center') get isCenter(): boolean {
    return this.align === 'center';
  }

  @HostBinding('class.baf-align-right') get isRight(): boolean {
    return this.align === 'right';
  }
}
