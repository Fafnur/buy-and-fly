import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@baf/core';

import type { Align } from './types';

@Directive({
  selector: '[bafAlign]',
  standalone: true,
  providers: [ExtraClassService],
})
export class AlignDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly align = input<Align, Align>(undefined, {
    alias: 'bafAlign',
    transform: (value) => {
      this.extraClassService.update('align', toClass(value, 'align'));

      return value;
    },
  });
}
