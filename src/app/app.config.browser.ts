import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { appConfig } from './app.config';

const browserConfig: ApplicationConfig = {
  providers: [provideAnimations()],
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
