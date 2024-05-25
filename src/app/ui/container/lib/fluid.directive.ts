import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'baf-lib[fluid]',
  standalone: true,
})
export class FluidDirective {
  @Input() fluid: boolean | string | undefined | null;

  @HostBinding('class.baf-fluid') get isFluid() {
    return coerceBooleanProperty(this.fluid);
  }
}
