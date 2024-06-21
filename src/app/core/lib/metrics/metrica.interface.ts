import { InjectionToken } from '@angular/core';

export interface MetricConfig {
  readonly ids?: string[];
  readonly counter?: number;
  readonly domains: string[];
  readonly paths: string[];
}

export const METRIC_CONFIG = new InjectionToken<MetricConfig>('MetricConfig');
