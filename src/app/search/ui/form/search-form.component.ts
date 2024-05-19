import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-search-form',
  standalone: true,
  imports: [],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {}
