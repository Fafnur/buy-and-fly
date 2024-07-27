import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@baf/core';

import type { ExtraSize } from './types';

@Directive({
  selector: '[bafSize]',
  standalone: true,
  providers: [ExtraClassService],
})
export class ExtraSizeDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly size = input<ExtraSize, ExtraSize>(undefined, {
    alias: 'bafSize',
    transform: (value) => {
      this.extraClassService.update('size', toClass(value, 'size'));

      return value;
    },
  });
}
