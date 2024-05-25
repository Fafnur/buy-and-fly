import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[size]',
  standalone: true,
})
export class ExtraSizeDirective {
  @Input() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined | null;

  @HostBinding('class.baf-size-xsmall') get isXSmall(): boolean {
    return this.size === 'xsmall';
  }
  @HostBinding('class.baf-size-small') get isSmall(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.baf-size-medium') get isMedium(): boolean {
    return this.size === 'medium';
  }

  @HostBinding('class.baf-size-large') get isLarge(): boolean {
    return this.size === 'large';
  }

  @HostBinding('class.baf-size-xlarge') get isXLarge(): boolean {
    return this.size === 'xlarge';
  }
}
