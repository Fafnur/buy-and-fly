import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { PathPipe } from '@baf/core';
import { SearchType } from '@baf/search/common';

export interface SearchTab {
  readonly id: SearchType;
  readonly label: string;
  readonly suffix: string;
}

@Component({
  selector: 'baf-search-tabs',
  standalone: true,
  imports: [RouterLink, PathPipe, RouterLinkActive],
  templateUrl: './search-tabs.component.html',
  styleUrl: './search-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTabsComponent {
  readonly tabs: SearchTab[] = [
    {
      id: SearchType.Avia,
      label: 'Avia',
      suffix: '10%',
    },
    {
      id: SearchType.Hotel,
      label: 'Hotels',
      suffix: '10%',
    },
    {
      id: SearchType.Tour,
      label: 'Tours',
      suffix: '4%',
    },
    {
      id: SearchType.Railway,
      label: 'Railway',
      suffix: '5%',
    },
  ];

  readonly types = SearchType;

  readonly selected = signal<SearchTab>(this.tabs[0]);

  onSelect(tab: SearchTab) {
    this.selected.set(tab);
  }
}
