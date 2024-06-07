import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@baf/core';

export type SectionColor = 'smoke' | undefined;

@Component({
  selector: 'baf-section',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExtraClassService],
})
export class SectionComponent {
  private readonly extraClassService = inject(ExtraClassService);

  readonly color = input<SectionColor, SectionColor>(undefined, {
    alias: 'bafColor',
    transform: (value) => {
      this.extraClassService.update('color', toClass(value, 'color'));

      return value;
    },
  });
}
