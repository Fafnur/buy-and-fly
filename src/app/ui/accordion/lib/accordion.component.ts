import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArrowDownComponent, ArrowUpComponent } from '@baf/ui/icons';

export interface AccordionItem {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'baf-accordion',
  standalone: true,
  imports: [CdkAccordionModule, ArrowDownComponent, ArrowUpComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  readonly items = input.required<AccordionItem[]>();
}
