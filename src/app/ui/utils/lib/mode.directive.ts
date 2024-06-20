import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@baf/core';

import { ButtonMode } from './types';

@Directive({
  selector: '[bafMode]',
  standalone: true,
  providers: [ExtraClassService],
})
export class ModeDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly mode = input<ButtonMode, ButtonMode>(undefined, {
    alias: 'bafMode',
    transform: (value) => {
      this.extraClassService.update('mode', toClass(value, 'mode'));

      return value;
    },
  });
}
