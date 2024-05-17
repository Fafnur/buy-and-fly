import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
