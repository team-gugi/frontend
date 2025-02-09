import { atom } from 'recoil';
import { INotification, IMateInfo } from '@/lib/api/fetchAllNotifications';

export const notificationsAtom = atom({
  key: 'notificationsAtom',
  default: {
    notification: [] as INotification[],
    pending: [] as IMateInfo[],
    accepted: [] as IMateInfo[],
    rejected: [] as IMateInfo[],
  },
});
