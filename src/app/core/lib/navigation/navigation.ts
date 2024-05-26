export interface NavigationLink {
  readonly route: string;
  readonly label: string;
  readonly params?: Record<string, unknown>;
}

export const PATHS = {
  home: '',
  rules: 'rules',
  terms: 'terms',
  documents: 'documents',
  faq: 'faq',
  tag: 'tag/:id',
  search: 'search',
  searchAvia: 'search/avia',
  searchHotel: 'search/hotel',
  searchTour: 'search/tour',
  searchRailway: 'search/railway',
} as const;

export type PathValues = (typeof PATHS)[keyof typeof PATHS];
