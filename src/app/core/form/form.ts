import { FormControl, FormGroup } from '@angular/forms';

export type FormFor<T> = {
  [P in keyof T]: T[P] extends Record<string, unknown> ? FormGroup<FormFor<T[P]>> : FormControl<T[P]>;
};
