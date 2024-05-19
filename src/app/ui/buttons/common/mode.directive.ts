import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mode]',
  standalone: true,
})
export class ModeDirective {
  @Input() mode: 'primary' | 'secondary' | 'tertiary' | undefined | null = 'primary';

  @HostBinding('class.baf-mode-primary') get isModePrimary() {
    return this.mode === 'primary';
  }

  @HostBinding('class.baf-mode-secondary') get isModeSecondary(): boolean {
    return this.mode === 'secondary';
  }

  @HostBinding('class.baf-mode-tertiary') get isModeTertiary(): boolean {
    return this.mode === 'tertiary';
  }
}
