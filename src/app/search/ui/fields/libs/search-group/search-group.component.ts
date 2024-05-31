import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'baf-search-group',
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  styleUrl: './search-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchGroupComponent {
  readonly mode = input<'destination' | 'date' | 'line' | 'submit' | 'single'>();

  @HostBinding('class.is-destination') get isDestination() {
    return this.mode() === 'destination';
  }

  @HostBinding('class.is-date') get isDate() {
    return this.mode() === 'date';
  }

  @HostBinding('class.is-line') get isLine() {
    return this.mode() === 'line';
  }

  @HostBinding('class.is-submit') get isSubmit() {
    return this.mode() === 'submit';
  }

  @HostBinding('class.is-single') get isSingle() {
    return this.mode() === 'single';
  }
}
