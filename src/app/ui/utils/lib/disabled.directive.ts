import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, input } from '@angular/core';

/**
 * Important: This is a special attribute for HTML and Angular uses this property in a special way.
 * Therefore, the prefix is not specified, but the standard one is replaced.
 */
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
