import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-search-page',
  standalone: true,
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {}
