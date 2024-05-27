import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'baf-container[mobile]',
  standalone: true,
})
export class MobileDirective {
  @Input() mobile: boolean | string | undefined | null;

  @HostBinding('class.mobile-no-gutter') get isMobile() {
    return coerceBooleanProperty(this.mobile);
  }
}
