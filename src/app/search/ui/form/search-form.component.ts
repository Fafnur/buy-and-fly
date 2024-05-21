import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SearchFormGroup } from '@baf/search/common';
import { SearchService } from '@baf/search/services';
import { ButtonComponent } from '@baf/ui/buttons';

import { SearchDateComponent } from './search-date/search-date.component';
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { SearchGroupComponent } from './search-group/search-group.component';
import { SearchPassengersComponent } from './search-passengers/search-passengers.component';
import { SearchReverseComponent } from './search-reverse/search-reverse.component';
import { AutocompleteComponent } from '@baf/ui/autocomplete';
import { of } from 'rxjs';

const initialForm: SearchFormGroup = new FormGroup({
  from: new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  to: new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  startDate: new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  endDate: new FormControl<string>('', {
    nonNullable: true,
    validators: [],
  }),
  passengers: new FormControl<number>(1, {
    nonNullable: true,
    validators: [Validators.required],
  }),
});

@Component({
  selector: 'baf-search-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SearchGroupComponent,
    SearchDestinationComponent,
    SearchReverseComponent,
    SearchDateComponent,
    SearchPassengersComponent,
    ButtonComponent,
    AutocompleteComponent,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchService],
})
export class SearchFormComponent {
  readonly form = initialForm;

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

  private readonly searchService = inject(SearchService);

  onSubmit(): void {}
}
