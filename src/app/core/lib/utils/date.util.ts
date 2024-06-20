export function getDaysBetweenDates(startDate: Date | string, endDate: Date | string): number {
  return Math.round((new Date(endDate).getTime() - new Date(startDate).getTime()) / 86400000);
}
