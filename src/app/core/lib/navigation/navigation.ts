export const PATHS = {
  home: '',
  rules: 'rules',
  terms: 'terms',
  documents: 'documents',
  faq: 'faq',
  search: 'search',
  searchAvia: 'search/avia',
  searchHotel: 'search/hotel',
  searchTour: 'search/tour',
  searchRailway: 'search/railway',
} as const;

export type PathValues = (typeof PATHS)[keyof typeof PATHS];

type Split<Value extends string> = Value extends `${infer LValue}/${infer RValue}` ? Filter<LValue> | Split<RValue> : Filter<Value>;

type Filter<T extends string> = T extends `:${infer Param}` ? Param : never;

export type GetPathParams<T extends string> = {
  [key in Split<T>]: string | number;
};

export interface NavigationLink<T extends PathValues = PathValues> {
  readonly label: string;
  readonly route: T;
  readonly params?: GetPathParams<T>;
}
