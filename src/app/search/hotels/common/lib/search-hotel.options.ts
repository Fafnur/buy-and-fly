import { castQueryParams } from '@baf/core';

export interface SearchHotelsInfoOptions {
  readonly [key: string]: unknown;

  readonly query: string;
  readonly lang: string;
  readonly limit: number;
  readonly lookFor: string;
}

export function getSearchHotelsInfoOptions(queryParams: Record<string, unknown>, lang: string): SearchHotelsInfoOptions {
  const { city } = castQueryParams(queryParams);

  if (typeof city !== 'string') {
    throw new Error('Invalid search flight options');
  }

  const limit = !isNaN(Number(queryParams['limit'])) ? Number(queryParams['limit']) : 20;

  return {
    query: city,
    lang: lang.toLowerCase(),
    lookFor: 'hotel',
    limit,
  };
}

export interface SearchHotelsOptions {
  readonly [key: string]: unknown;

  readonly location: string;
  readonly limit: number;
  readonly currency: string;
  readonly token: string;
}

export function getSearchHotelsOptions(queryParams: Record<string, unknown>, token: string, currency: string): SearchHotelsOptions {
  const { city, startDate, endDate } = castQueryParams(queryParams);

  if (typeof city !== 'string' || typeof startDate !== 'string' || typeof endDate !== 'string') {
    throw new Error('Invalid search flight options');
  }

  const limit = !isNaN(Number(queryParams['limit'])) ? Number(queryParams['limit']) : 20;

  return {
    location: city,
    checkIn: startDate,
    checkOut: endDate,
    currency: currency.toLowerCase(),
    limit,
    token,
  };
}
