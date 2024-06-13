import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SearchFieldOptions } from '@baf/search/common';
import { InputComponent, InputControlComponent } from '@baf/ui/input';
import { LabelComponent } from '@baf/ui/label';

export type SearchPassengersOptions = SearchFieldOptions;

@Component({
  selector: 'baf-search-passengers',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, InputControlComponent, LabelComponent],
  templateUrl: './search-passengers.component.html',
  styleUrl: './search-passengers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPassengersComponent {
  readonly control = input.required<FormControl<number | undefined>>();
  readonly options = input.required<SearchPassengersOptions>();
}
