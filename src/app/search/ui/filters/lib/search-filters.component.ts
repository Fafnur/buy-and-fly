import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-search-filters',
  standalone: true,
  imports: [],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent {}
