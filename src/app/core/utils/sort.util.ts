export interface SortEntity {
  readonly createdAt: string;
}

export function sortComparer(a: SortEntity, b: SortEntity): number {
  return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
}
