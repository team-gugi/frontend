'use client';
import { useEffect, useState } from 'react';
import MypageTabHeader from './MypageTabHeader';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { notificationsAtom } from '@/recoil/notificationsAtom';
import {
  fetchAllNotifications,
  IAllNotificationsResponse,
} from '@/lib/api/fetchAllNotifications';
import MatchStatusCard from './MatchStatusCard';

export default function MatchStatus() {
  const [activeTab, setActiveTab] = useState('알림함');

  const notifications = useRecoilValue(notificationsAtom); // 상태값을 가져오기
  const setNotifications = useSetRecoilState(notificationsAtom); // 상태값 변경 함수

  // API 호출을 컴포넌트 내에서 직접 처리
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const data: IAllNotificationsResponse = await fetchAllNotifications(); // API 호출
        setNotifications({
          notification: data.notification, // 알림 리스트
          pending: data.pending, // 대기 중인 매칭
          accepted: data.accepted, // 수락된 매칭
          rejected: data.rejected, // 거절된 매칭
        }); // 받아온 데이터를 Recoil 상태에 저장
      } catch (error) {
        console.error('알림을 가져오는 데 실패했습니다:', error);
      }
    };
    console.log('fetchAllNotifications (1): ', notifications);

    getNotifications();
  }, [setNotifications]);

  console.log('fetchAllNotifications (2): ', notifications);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderNotifications = () => {
    // 데이터가 비어있으면 '대기/진행 중인 매칭이 없습니다.' 메시지 표시
    if (
      (activeTab === '알림함' && notifications.notification.length === 0) ||
      (activeTab === '매칭대기' && notifications.pending.length === 0) ||
      (activeTab === '매칭성사' && notifications.accepted.length === 0) ||
      (activeTab === '매칭거절' && notifications.rejected.length === 0)
    ) {
      return (
        <div className="flex flex-col px-24 py-26 gap-8 bg-SemiWhite rounded-xl">
          <p className="font-light text-12 text-SemiBlack">
            대기/진행 중인 매칭이 없습니다.
          </p>
          <p className="font-light text-12 text-SemiBlack">
            혼자보단 같이! 직관 친구들을 찾아 떠나볼까요? (🖐🏻'-' ){' '}
          </p>
        </div>
      );
    }
    switch (activeTab) {
      case '알림함':
        return (
          <></>
          // <div>
          //   {notifications.notification.map((notification) => (
          //     <MatchStatusCard
          //       key={notification.mateId}
          //       notification={notification}
          //     />
          //   ))}
          // </div>
        );
      case '매칭대기':
        return (
          <div className="flex flex-col gap-24 mb-80">
            {notifications.pending.map((notification) => (
              <MatchStatusCard
                key={notification.mateId}
                notification={notification}
              />
            ))}
          </div>
        );
      case '매칭성사':
        return (
          <div className="flex flex-col gap-24 mb-80">
            {notifications.accepted.map((notification) => (
              <MatchStatusCard
                key={notification.mateId}
                notification={notification}
              />
            ))}
          </div>
        );
      case '매칭거절':
        return (
          <div className="flex flex-col gap-24 mb-80">
            {notifications.rejected.map((notification) => (
              <MatchStatusCard
                key={notification.mateId}
                notification={notification}
              />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex flex-col px-24 py-26 gap-8 bg-SemiWhite rounded-xl">
            <p className="font-light text-12 text-SemiBlack">
              대기/진행 중인 매칭이 없습니다.
            </p>
            <p className="font-light text-12 text-SemiBlack">
              혼자보단 같이! 직관 친구들을 찾아 떠나볼까요? (🖐🏻'-' ){' '}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-30 px-24">
      <MypageTabHeader activeTab={activeTab} onTabChange={handleTabChange} />
      <div>{renderNotifications()}</div>
    </div>
  );
}
