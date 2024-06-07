import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@baf/core';

import { Size } from './types';

@Directive({
  selector: '[bafSize]',
  standalone: true,
  providers: [ExtraClassService],
})
export class SizeDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly size = input<Size, Size>('medium', {
    alias: 'bafSize',
    transform: (value) => {
      this.extraClassService.update('size', toClass(value, 'size'));

      return value;
    },
  });
}
