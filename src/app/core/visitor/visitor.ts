import { uuidv4 } from '../utils/uuid.util';

export const VISITOR_UUID = 'visitorUuid';

export function getVisitorUuid(): string {
  let visitorUuid = uuidv4();

  if (typeof window !== 'undefined') {
    visitorUuid = window.localStorage.getItem(VISITOR_UUID) ?? visitorUuid;
    window.localStorage.setItem(VISITOR_UUID, visitorUuid);
  }

  return visitorUuid;
}
