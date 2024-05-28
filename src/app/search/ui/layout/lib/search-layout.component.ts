import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'baf-search-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './search-layout.component.html',
  styleUrl: './search-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLayoutComponent {}
