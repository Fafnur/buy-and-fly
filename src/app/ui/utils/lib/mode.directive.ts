import { Directive, HostBinding, input } from '@angular/core';

import { ButtonMode } from './types';

@Directive({
  selector: '[bafMode]',
  standalone: true,
})
export class ModeDirective {
  readonly mode = input<ButtonMode>('primary', { alias: 'bafMode' });

  @HostBinding('class.mode-primary') get isModePrimary() {
    return this.mode() === 'primary';
  }

  @HostBinding('class.mode-secondary') get isModeSecondary(): boolean {
    return this.mode() === 'secondary';
  }

  @HostBinding('class.mode-tertiary') get isModeTertiary(): boolean {
    return this.mode() === 'tertiary';
  }
}
