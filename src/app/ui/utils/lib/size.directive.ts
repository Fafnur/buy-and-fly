import { Directive, HostBinding, input } from '@angular/core';

import { Size } from './types';

@Directive({
  selector: '[bafSize]',
  standalone: true,
})
export class SizeDirective {
  readonly size = input<Size>('medium', { alias: 'bafSize' });

  @HostBinding('class.size-small') get isSmall(): boolean {
    return this.size() === 'small';
  }

  @HostBinding('class.size-medium') get isMedium(): boolean {
    return this.size() === 'medium';
  }

  @HostBinding('class.size-large') get isLarge(): boolean {
    return this.size() === 'large';
  }
}
