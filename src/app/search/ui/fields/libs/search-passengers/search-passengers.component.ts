import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputComponent, InputControlComponent } from '@baf/ui/input';
import { LabelComponent } from '@baf/ui/label';

export interface SearchPassengersOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-search-passengers',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, InputControlComponent, LabelComponent],
  templateUrl: './search-passengers.component.html',
  styleUrl: './search-passengers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPassengersComponent {
  @Input({ required: true }) control!: FormControl<number | undefined>;
  @Input({ required: true }) options!: SearchPassengersOptions;
}
