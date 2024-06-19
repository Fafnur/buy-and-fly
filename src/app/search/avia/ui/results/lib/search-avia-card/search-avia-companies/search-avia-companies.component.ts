import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'baf-search-avia-companies',
  standalone: true,
  imports: [],
  templateUrl: './search-avia-companies.component.html',
  styleUrl: './search-avia-companies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaCompaniesComponent {
  readonly airline = input.required<string>();
}
