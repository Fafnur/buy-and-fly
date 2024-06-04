import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeadlineComponent } from '@baf/ui/headline';

@Component({
  selector: 'baf-questions',
  standalone: true,
  imports: [HeadlineComponent, CdkAccordionModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
}
