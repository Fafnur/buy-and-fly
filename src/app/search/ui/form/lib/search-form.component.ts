import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchGroupComponent } from './search-group/search-group.component';

@Component({
  selector: 'baf-search-form',
  standalone: true,
  imports: [SearchGroupComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {}
