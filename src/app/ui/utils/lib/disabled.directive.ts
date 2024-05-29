import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[disabled]',
  standalone: true,
})
export class DisabledDirective {
  readonly disabled = input<string | boolean | null | undefined>();

  @HostBinding('class.is-disabled') get isSmall(): boolean {
    return coerceBooleanProperty(this.disabled());
  }
}
