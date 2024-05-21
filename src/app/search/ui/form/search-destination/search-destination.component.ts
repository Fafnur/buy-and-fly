import { ChangeDetectionStrategy, Component, HostBinding, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { SearchService } from '@baf/search/services';
import { AutocompleteComponent } from '@baf/ui/autocomplete';
import { InputComponent } from '@baf/ui/input';

export interface SearchDestinationOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-search-destination',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, AutocompleteComponent],
  templateUrl: './search-destination.component.html',
  styleUrl: './search-destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDestinationComponent {
  private readonly searchService = inject(SearchService);

  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: SearchDestinationOptions;

  @HostBinding('class.is-from') get isFrom() {
    return this.options.id === 'from';
  }

  @HostBinding('class.is-to') get isTo() {
    return this.options.id === 'to';
  }

  options$ = of([
    {
      name: 'MOW',
      code: 'aaa',
      type: 'airplane',
    },
    {
      name: 'MOW',
      code: 'bbb',
      type: 'airplane',
    },
    {
      name: 'MOW',
      code: 'ccc',
      type: 'airplane',
    },
  ]);

  onChanged(value: string): void {
    console.log(value);
  }
}
