import { APP_INITIALIZER, Provider } from '@angular/core';

import { GoogleAnalytics } from './google-analytics';
import { MetricService } from './metric.service';
import { METRIC_CONFIG, MetricConfig } from './metrica.interface';
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
