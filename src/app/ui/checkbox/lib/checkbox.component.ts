import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export interface CheckboxOptions {
  readonly [key: string]: unknown;

  readonly name?: string;
}

@Component({
  selector: 'baf-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input<CheckboxOptions>({});
}
