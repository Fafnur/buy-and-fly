import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, inject, input } from '@angular/core';

import type { CoerceBoolean } from '@baf/core';
import { ExtraClassService } from '@baf/core';

@Directive({
  selector: 'baf-container[bafFluid]',
  standalone: true,
  providers: [ExtraClassService],
})
export class FluidDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly fluid = input<CoerceBoolean, CoerceBoolean>(undefined, {
    alias: 'bafFluid',
    transform: (value) => {
      this.extraClassService.patch('fluid', coerceBooleanProperty(value));

      return value;
    },
  });
}
