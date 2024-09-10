import type { ApplicationConfig } from '@angular/core';
import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { envConfig } from '@baf/core';

import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(envConfig, appConfig, serverConfig);
