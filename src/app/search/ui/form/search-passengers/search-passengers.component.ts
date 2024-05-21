import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@baf/ui/input';

@Component({
  selector: 'baf-search-passengers',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './search-passengers.component.html',
  styleUrl: './search-passengers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPassengersComponent {
  @Input({ required: true }) control!: FormControl<number>;
}
