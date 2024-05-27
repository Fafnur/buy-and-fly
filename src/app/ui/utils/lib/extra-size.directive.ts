import { Directive, HostBinding, Input } from '@angular/core';

import { ExtraSize } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[size]',
  standalone: true,
})
export class ExtraSizeDirective {
  @Input() size: ExtraSize = 'medium';

  @HostBinding('class.size-xsmall') get isXSmall(): boolean {
    return this.size === 'xsmall';
  }
  @HostBinding('class.size-small') get isSmall(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.size-medium') get isMedium(): boolean {
    return this.size === 'medium';
  }

  @HostBinding('class.size-large') get isLarge(): boolean {
    return this.size === 'large';
  }

  @HostBinding('class.size-xlarge') get isXLarge(): boolean {
    return this.size === 'xlarge';
  }
}
