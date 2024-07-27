import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, inject, input } from '@angular/core';

import type { CoerceBoolean } from '@baf/core';
import { ExtraClassService } from '@baf/core';

@Directive({
  selector: 'baf-container[bafMobile]',
  standalone: true,
  providers: [ExtraClassService],
})
export class MobileDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly mobile = input<CoerceBoolean, CoerceBoolean>(undefined, {
    alias: 'bafMobile',
    transform: (value) => {
      this.extraClassService.patch('mobile-no-gutter', coerceBooleanProperty(value));

      return value;
    },
  });
}
