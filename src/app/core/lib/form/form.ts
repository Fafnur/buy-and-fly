import { FormControl, FormGroup } from '@angular/forms';

export type FormFor<T> = {
  [P in keyof T]: FormControl<T[P]>;
};

export type FormWithSubFor<T> = {
  [P in keyof T]: T[P] extends Record<string, unknown> ? FormGroup<FormFor<T[P]>> : FormControl<T[P]>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ChangeFn = (value: any) => void;
export type TouchedFn = () => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DisplayFn = (value: any, index?: number) => string;
