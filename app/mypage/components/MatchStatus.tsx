'use client';
import { useState } from 'react';
import MypageTabHeader from './MypageTabHeader';
import MatchingCardList from './MatchingCardList';

export default function MatchStatus() {
  const [activeTab, setActiveTab] = useState('알림함');
  const [notifications, setNotifications] = useState<string[]>([
    '매칭 요청 1',
    '매칭 요청 2', // 예시 알림 데이터
  ]);

  const [pending, setPending] = useState<string[]>([
    '대기 중인 매칭 1',
    '대기 중인 매칭 2', // 예시 대기 데이터
  ]);
  const [accepted, setAccepted] = useState<string[]>([
    '성사된 매칭 1',
    '성사된 매칭 2', // 예시 성사 데이터
  ]);
  const [rejected, setRejected] = useState<string[]>([
    '거절된 매칭 1',
    '거절된 매칭 2', // 예시 거절 데이터
  ]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-40 px-24">
      <MypageTabHeader activeTab={activeTab} onTabChange={handleTabChange} />
      <MatchingCardList
        activeTab={activeTab}
        notifications={notifications}
        pending={pending}
        accepted={accepted}
        rejected={rejected}
      />
    </div>
  );
}
