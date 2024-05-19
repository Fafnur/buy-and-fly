import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'baf-search-passengers',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-passengers.component.html',
  styleUrl: './search-passengers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPassengersComponent {
  @Input({ required: true }) control!: FormControl<number>;
}
