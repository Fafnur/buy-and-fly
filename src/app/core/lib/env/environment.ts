import { APP_INITIALIZER, makeStateKey, TransferState } from '@angular/core';
import process from 'node:process';

export const ENV_KEY = makeStateKey<Environment>('Environment');

export interface Environment {
  readonly aviasalesToken: string;
  readonly hotellookToken: string;
}

export function provideEnv() {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (transferState: TransferState) => {
        return () => {
          transferState.set<Environment>(ENV_KEY, {
            aviasalesToken: process.env['AVIASALES_TOKEN'] ?? '',
            hotellookToken: process.env['HOTELLOOK_TOKEN'] ?? '',
          });
        };
      },
      deps: [TransferState],
      multi: true,
    },
  ];
}
