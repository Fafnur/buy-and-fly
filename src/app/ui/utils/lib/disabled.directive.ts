import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[disabled]',
  standalone: true,
})
export class DisabledDirective {
  @Input() disabled: string | boolean | null | undefined;

  @HostBinding('class.is-disabled') get isSmall(): boolean {
    return coerceBooleanProperty(this.disabled);
  }
}
