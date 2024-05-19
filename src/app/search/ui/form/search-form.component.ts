import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormFor } from '@baf/core';
import { SearchForm } from '@baf/search/common';

import { SearchDateComponent } from './search-date/search-date.component';
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { SearchGroupComponent } from './search-group/search-group.component';
import { SearchPassengersComponent } from './search-passengers/search-passengers.component';
import { SearchReverseComponent } from './search-reverse/search-reverse.component';

const initialForm = new FormGroup<FormFor<SearchForm>>({
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
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  readonly form = initialForm;
}
