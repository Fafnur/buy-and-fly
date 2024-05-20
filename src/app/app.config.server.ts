import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { appConfig } from './app.config';
import { provideEnv } from './core/env/env';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideEnv()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
