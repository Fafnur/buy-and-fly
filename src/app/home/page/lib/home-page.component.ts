import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  ConnectComponent,
  ConvenientWithUsComponent,
  MustBuyComponent,
  PromoComponent,
  QuestionsComponent,
  TravelingComponent,
} from '@baf/home/ui/widgets';
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
export class HomePageComponent {}
