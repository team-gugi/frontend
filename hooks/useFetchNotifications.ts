import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { notificationsAtom } from '@/recoil/notificationsAtom';
import { fetchAllNotifications } from '@/lib/api/fetchAllNotifications';

export const useFetchNotifications = () => {
  const setNotifications = useSetRecoilState(notificationsAtom);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const data = await fetchAllNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('알림을 가져오는 데 실패했습니다:', error);
      }
    };

    getNotifications();
  }, [setNotifications]);
};
