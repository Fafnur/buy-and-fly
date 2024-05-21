import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@baf/ui/input';

export interface SearchDestinationOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-search-destination',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './search-destination.component.html',
  styleUrl: './search-destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDestinationComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: SearchDestinationOptions;

  @HostBinding('class.is-from') get isFrom() {
    return this.options.id === 'from';
  }

  @HostBinding('class.is-to') get isTo() {
    return this.options.id === 'to';
  }
}
