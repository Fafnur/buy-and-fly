import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { METRIC_CONFIG } from './metrica.interface';

declare global {
  interface Window {
    readonly gtag?: (...params: unknown[]) => void;
  }
}

@Injectable()
export class GoogleAnalytics {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly config = inject(METRIC_CONFIG);
  private readonly title = inject(Title);

  readonly gtag: (...params: unknown[]) => void;

  constructor() {
    if (this.isBrowser && typeof this.document.defaultView?.gtag !== 'undefined' && this.config.ids && this.config.ids?.length > 0) {
      this.gtag = this.document.defaultView.gtag;
    } else {
      this.gtag = () => {};
    }
  }

  set(payload: Record<string, unknown>): void {
    this.gtag('set', payload);
  }

  sendEvent(action: string, payload?: Record<string, unknown>): void {
    this.gtag('event', action, {
      ...payload,
      event_category: payload?.['eventCategory'],
      event_label: payload?.['eventLabel'],
      value: payload?.['eventValue'],
    });
  }

  sendNavigation(url: string): void {
    if (
      (this.isBrowser && !this.config.domains.every((domain) => this.document.referrer.indexOf(domain) < 0)) ||
      !this.config.paths.every((path) => this.document.location.pathname.indexOf(path) < 0)
    ) {
      this.set({ page_referrer: this.document.defaultView?.location.origin ?? '' });
    }

    if (this.config.ids) {
      for (const key of this.config.ids) {
        this.gtag('config', key, {
          page_title: this.title.getTitle(),
          page_path: url,
        });
      }
    }
  }
}
