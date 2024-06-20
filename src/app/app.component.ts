import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'baf-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
