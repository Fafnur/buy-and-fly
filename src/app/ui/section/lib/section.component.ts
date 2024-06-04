import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

export type SectionColor = 'smoke' | undefined;

@Component({
  selector: 'baf-section',
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  styleUrl: './section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  readonly color = input<SectionColor>(undefined, {
    alias: 'bafColor',
  });

  @HostBinding('class.color-smoke') get isColor() {
    return this.color() === 'smoke';
  }
}
