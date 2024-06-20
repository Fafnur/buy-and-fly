export interface SearchDestination {
  readonly [key: string]: unknown;
  readonly id: string;
  readonly type: string;
  readonly code: string;
  readonly name: string;
  readonly country_name: string;
  readonly city_name: string;
  readonly value: string;
}

export interface SearchFieldOptions {
  readonly [key: string]: unknown;
  readonly id: string;
  readonly label: string;
  readonly name?: string;
  readonly placeholder?: string;
}

export type SearchFormOptions<T> = {
  readonly [P in keyof T]: SearchFieldOptions;
};

export function getSearchQueryParams(
  form: {
    readonly [key: string]: string | number | boolean | Record<string, unknown>;
  },
  name?: string,
): Record<string, unknown> {
  const params: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(form)) {
    if (!!value && typeof value === 'object') {
      params[key] = 'value' in value ? value['value'] : undefined;
      if (name) {
        params[`${key}Name`] = name in value ? value[name] : undefined;
      }
    } else {
      params[key] = value;
    }
  }

  return params;
}
