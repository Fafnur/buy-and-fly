import { FormControl, FormGroup } from '@angular/forms';

export type FormFor<T> = {
  [P in keyof T]: FormControl<T[P]>;
};

export type FormWithSubFor<T> = {
  [P in keyof T]: T[P] extends Record<string, unknown> ? FormGroup<FormFor<T[P]>> : FormControl<T[P]>;
};

export function castQueryParams(queryParams: Record<string, unknown>, props?: string[]): Record<string, unknown> {
  const mapped: Record<string, unknown> = {};

  const keys = props ?? Object.keys(queryParams);

  for (const key of keys) {
    const value = queryParams[key];

    if (typeof value === 'string' && value.length > 0) {
      if (['true', 'false'].includes(value)) {
        mapped[key] = value === 'true';
      } else if (!isNaN(Number(value))) {
        mapped[key] = Number(value);
      } else {
        mapped[key] = value;
      }
    } else if (typeof value === 'boolean') {
      mapped[key] = value;
    } else if (typeof value === 'number' && value > 0) {
      mapped[key] = value;
    }
  }

  return mapped;
}
