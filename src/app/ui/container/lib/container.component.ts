import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FluidDirective } from './fluid.directive';
import { MobileDirective } from './mobile.directive';

@Component({
  selector: 'baf-container',
  standalone: true,
  imports: [RouterOutlet],
  template: '<ng-content></ng-content>',
  styleUrl: './container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'baf-lib',
  },
  hostDirectives: [
    {
      directive: FluidDirective,
      inputs: ['fluid'],
    },
    {
      directive: MobileDirective,
      inputs: ['mobile'],
    },
  ],
})
export class ContainerComponent {}
