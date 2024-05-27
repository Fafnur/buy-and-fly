import { Directive, HostBinding, Input } from '@angular/core';

import { ButtonMode } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mode]',
  standalone: true,
})
export class ModeDirective {
  @Input() mode: ButtonMode = 'primary';

  @HostBinding('class.mode-primary') get isModePrimary() {
    return this.mode === 'primary';
  }

  @HostBinding('class.mode-secondary') get isModeSecondary(): boolean {
    return this.mode === 'secondary';
  }

  @HostBinding('class.mode-tertiary') get isModeTertiary(): boolean {
    return this.mode === 'tertiary';
  }
}
