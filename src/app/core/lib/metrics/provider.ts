import type { Provider } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';

import { GoogleAnalytics } from './google-analytics';
import { MetricService } from './metric.service';
import type { MetricConfig } from './metrica.interface';
import { METRIC_CONFIG } from './metrica.interface';
import { YandexMetrika } from './yandex.metrika';

export function provideMetrics(metricConfig: MetricConfig): Provider[] {
  return [
    {
      provide: METRIC_CONFIG,
      useValue: metricConfig,
    },
    MetricService,
    YandexMetrika,
    GoogleAnalytics,
    {
      provide: APP_INITIALIZER,
      useFactory: (metricService: MetricService) => {
        return () => metricService.init();
      },
      multi: true,
      deps: [MetricService],
    },
  ];
}
