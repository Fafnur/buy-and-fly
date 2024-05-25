import { Directive, HostBinding, Input } from '@angular/core';

import { Size } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[size]',
  standalone: true,
})
export class SizeDirective {
  @Input() size: Size = 'medium';

  @HostBinding('class.baf-size-small') get isSmall(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.baf-size-medium') get isMedium(): boolean {
    return this.size === 'medium';
  }

  @HostBinding('class.baf-size-large') get isLarge(): boolean {
    return this.size === 'large';
  }
}
