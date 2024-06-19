import { APP_INITIALIZER, makeStateKey, TransferState } from '@angular/core';
// import process from 'node:process';

export const ENV_KEY = makeStateKey<Environment>('Environment');

export interface Environment {
  readonly aviasalesToken: string;
  readonly hotellookToken: string;
}

export const ENV_DEFAULT: Environment = {
  aviasalesToken: '',
  hotellookToken: '',
};

export function provideEnv() {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (transferState: TransferState) => {
        return () => {
          transferState.set<Environment>(ENV_KEY, {
            aviasalesToken: process.env['AVIASALES_TOKEN'] ?? ENV_DEFAULT.aviasalesToken,
            hotellookToken: process.env['HOTELLOOK_TOKEN'] ?? ENV_DEFAULT.hotellookToken,
          });
        };
      },
      deps: [TransferState],
      multi: true,
    },
  ];
}
