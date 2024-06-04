import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { getRoute } from '@baf/core';
import { SearchFormSubmit } from '@baf/search/common';
import { ContainerComponent } from '@baf/ui/container';
import { SectionComponent } from '@baf/ui/section';

import { ConnectComponent } from './connect/connect.component';
import { ConvenientWithUsComponent } from './convenient-with-us/convenient-with-us.component';
import { MustBuyComponent } from './must-buy/must-buy.component';
import { PromoComponent } from './promo/promo.component';
import { QuestionsComponent } from './questions/questions.component';
import { TravelingComponent } from './traveling/traveling.component';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    SectionComponent,
    PromoComponent,
    MustBuyComponent,
    TravelingComponent,
    ConvenientWithUsComponent,
    ConnectComponent,
    QuestionsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly router = inject(Router);

  onActivate(component: SearchFormSubmit): void {
    component.submitted.subscribe((form) => {
      console.log(form);
      this.router.navigate(getRoute(component.redirectTo, {}));
    });
  }
}
