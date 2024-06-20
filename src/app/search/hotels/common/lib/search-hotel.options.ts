import { castQueryParams } from '@baf/core';

export interface SearchHotelsOptions {
  readonly [key: string]: unknown;

  readonly query: string;
  readonly lang: string;
  readonly limit: number;
  readonly lookFor: string;
  readonly token: string;
}

export function getSearchHotelsOptions(queryParams: Record<string, unknown>, token: string, lang: string): SearchHotelsOptions {
  const { city, startDate, endDate } = castQueryParams(queryParams);

  if (typeof city !== 'string' || typeof startDate !== 'string' || typeof endDate !== 'string') {
    throw new Error('Invalid search flight options');
  }

  const limit = !isNaN(Number(queryParams['limit'])) ? Number(queryParams['limit']) : 20;

  return {
    query: city,
    lang: lang.toLowerCase(),
    lookFor: 'hotels',
    limit,
    token,
  };
}
