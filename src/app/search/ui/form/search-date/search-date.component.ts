import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface SearchDateOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
  readonly autoHide?: FormControl<string>;
}

@Component({
  selector: 'baf-search-date',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './search-date.component.html',
  styleUrl: './search-date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDateComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: SearchDateOptions;

  @HostBinding('class.is-hide') get isAutoShow() {
    return this.options.autoHide?.invalid;
  }
}
