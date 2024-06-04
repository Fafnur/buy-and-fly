import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AccordionComponent } from '@baf/ui/accordion';
import { HeadlineComponent } from '@baf/ui/headline';
import { ArrowDownComponent, ArrowUpComponent } from '@baf/ui/icons';

@Component({
  selector: 'baf-questions',
  standalone: true,
  imports: [HeadlineComponent, CdkAccordionModule, ArrowDownComponent, ArrowUpComponent, AccordionComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {
  /* eslint-disable max-len */
  readonly questions = [
    {
      title: $localize`:Questions Get Title:When will cashback arrive?`,
      description: $localize`:Questions Get Description:Cashback for purchases in the Travel service will be credited on the 10th of the next month after your flight or stay. For example, if the flight was on August 29, then the cashback will be credited on September 10.`,
    },
    {
      title: $localize`:Questions Cashback Title:What is the maximum cashback for a purchase in the service?`,
      description: $localize`:Questions Cashback Description:Cashback for purchases in the Alpha Travel service is unlimited. The cashback amount is shown before purchase under the price of a ticket or hotel. For example, if an air ticket cost 1,000 dollars, we will credit you with a cashback of 100 dollars or miles.`,
    },
    {
      title: $localize`:Questions Exchange Title:Exchange or refund of air tickets`,
      description: $localize`:Questions Exchange Description:To return a ticket, use the feedback form. Please note that processing a return requires additional processing time - at least three hours. Therefore, the processing time for the registration procedure should be added to the allowable return period specified by the airline in the fare rules.`,
    },
    {
      title: $localize`:Questions Pay Title:How to pay for a ticket or accommodation with miles`,
      description: $localize`:Questions Pay Description:With miles accrued for paying with a Travel card, you can pay up to 100% of the order value. The minimum number of miles you can spend on one order is 10$. Select the desired flight and enter passenger information → Book and proceed to payment. On the next page, in the payment methods, select Only with miles or Card + miles.`,
    },
  ];
  /* eslint-enable max-len */
}
