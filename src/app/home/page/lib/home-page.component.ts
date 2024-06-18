import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { getRoute } from '@baf/core';
import {
  ConnectComponent,
  ConvenientWithUsComponent,
  MustBuyComponent,
  PromoComponent,
  QuestionsComponent,
  TravelingComponent,
} from '@baf/home/ui/widgets';
import { SearchAviaForm } from '@baf/search/avia/common';
import { CanSubmit } from '@baf/search/common';
import { ContainerComponent } from '@baf/ui/container';
import { SectionComponent } from '@baf/ui/section';

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

  onActivate(component: CanSubmit | object): void {
    if ('submitted' in component) {
      component.submitted.subscribe((form) => {
        // SearchAviaForm - all variants fields
        const formMapped = form as SearchAviaForm;

        const queryParams = {
          ...(form as Record<string, string>),
          from: typeof formMapped.from === 'string' ? formMapped.from : formMapped.from.value,
          fromName: typeof formMapped.from === 'string' ? undefined : formMapped.from.city_name,
          to: typeof formMapped.to === 'string' ? formMapped.to : formMapped.to.value,
          toName: typeof formMapped.to === 'string' ? undefined : formMapped.to.city_name,
        };
        void this.router.navigate(getRoute(component.redirectTo), { queryParams });
      });
    }
  }
}
