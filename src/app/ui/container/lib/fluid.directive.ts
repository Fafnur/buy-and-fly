import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'baf-container[fluid]',
  standalone: true,
})
export class FluidDirective {
  readonly fluid = input<boolean | string | undefined | null>();

  @HostBinding('class.fluid') get isFluid() {
    return coerceBooleanProperty(this.fluid());
  }
}
