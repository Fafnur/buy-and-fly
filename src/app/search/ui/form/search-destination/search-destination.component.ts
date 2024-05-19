import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface SearchDestinationOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-search-destination',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-destination.component.html',
  styleUrl: './search-destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDestinationComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: SearchDestinationOptions;
}
