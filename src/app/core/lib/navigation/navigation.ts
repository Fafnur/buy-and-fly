export const PATHS = {
  home: '',
  homeHotels: 'hotels',
  homeTours: 'tours',
  homeRailways: 'railways',

  rules: 'rules',
  terms: 'terms',
  documents: 'documents',
  faq: 'faq',

  notFound: 'not-found',
  serverError: 'server-error',
  permissionDenied: 'permission-denied',

  search: 'search',
  searchAvia: 'search/avia',
  searchHotel: 'search/hotels',
  searchTour: 'search/tours',
  searchRailway: 'search/railways',
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
  readonly suffix?: string;
}
