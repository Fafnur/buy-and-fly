import { APP_INITIALIZER, makeStateKey, TransferState } from '@angular/core';
import * as process from 'node:process';

export const ENV_KEY = makeStateKey<Environment>('Environment');

export interface Environment {
  readonly apiUrl: string;
  readonly apiToken: string;
}

export function provideEnv() {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (transferState: TransferState) => {
        return () => {
          transferState.set<Environment>(ENV_KEY, {
            apiUrl: process.env['API_URL'] ?? '',
            apiToken: process.env['API_TOKEN'] ?? '',
          });
        };
      },
      deps: [TransferState],
      multi: true,
    },
  ];
}
