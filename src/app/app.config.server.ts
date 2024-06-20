import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { provideEnv } from '@baf/core';

import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideEnv()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
