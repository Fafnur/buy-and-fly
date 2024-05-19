import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'baf-search-passengers',
  standalone: true,
  imports: [ReactiveFormsModule, SearchInputComponent],
  templateUrl: './search-passengers.component.html',
  styleUrl: './search-passengers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPassengersComponent {
  @Input({ required: true }) control!: FormControl<number>;
}
