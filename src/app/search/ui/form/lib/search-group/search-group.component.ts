import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'baf-search-group',
  standalone: true,
  imports: [],
  templateUrl: './search-group.component.html',
  styleUrl: './search-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchGroupComponent {
  @Input() mode?: 'destination' | 'date' | 'line' | 'submit';

  @HostBinding('class.is-destination') get isDestination() {
    return this.mode === 'destination';
  }

  @HostBinding('class.is-date') get isDate() {
    return this.mode === 'date';
  }

  @HostBinding('class.is-line') get isLine() {
    return this.mode === 'line';
  }

  @HostBinding('class.is-submit') get isSubmit() {
    return this.mode === 'submit';
  }
}
