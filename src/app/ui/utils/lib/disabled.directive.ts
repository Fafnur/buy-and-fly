import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, inject, input } from '@angular/core';

import type { CoerceBoolean } from '@baf/core';
import { ExtraClassService } from '@baf/core';

/**
 * Important: This is a special attribute for HTML and Angular uses this property in a special way.
 * Therefore, the prefix is not specified, but the standard one is replaced.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[disabled]',
  standalone: true,
  providers: [ExtraClassService],
})
export class DisabledDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly disabled = input<CoerceBoolean, CoerceBoolean>(undefined, {
    transform: (value) => {
      this.extraClassService.patch('is-disabled', coerceBooleanProperty(value));

      return value;
    },
  });
}
