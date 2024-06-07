import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, inject, input } from '@angular/core';

import { CoerceBoolean, ExtraClassService } from '@baf/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
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
