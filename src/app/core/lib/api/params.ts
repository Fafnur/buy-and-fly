export type HttpParams = Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;

export function castParams(all: Record<string, unknown>): HttpParams {
  const params: HttpParams = {};

  for (const [key, value] of Object.entries(all)) {
    if (Array.isArray(value) && value.length > 0) {
      params[key] = value.filter((val) => {
        return typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number';
      });
    } else if (typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') {
      params[key] = value;
    }
  }

  return params;
}
