'use client';
import React, { useState } from 'react';
import WinningRateBanner from './WinningRateBanner';
import CalendarView from './CalendarView';
import ListView from './ListView';
import Button from './Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { diaryAtom } from '@/recoil/diary/diaryAtom';
import { useRouter } from 'next/navigation';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'all'>('calendar');
  const diaries = useRecoilValue(diaryAtom);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/diary/post`);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex px-40 gap-60 ">
          <button
            className={`flex-1 py-16 text-center ${
              activeTab === 'calendar'
                ? 'border-b-1 border-SemiBlack font-medium text-SemiBlack'
                : 'font-normal text-Gray'
            }`}
            onClick={() => setActiveTab('calendar')}
          >
            캘린더
          </button>
          <button
            className={`flex-1 py-16 text-center ${
              activeTab === 'all'
                ? 'border-b-1 border-SemiBlack font-medium text-SemiBlack'
                : 'font-normal text-Gray'
            }`}
            onClick={() => setActiveTab('all')}
          >
            전체 일기
          </button>
        </div>
      </div>
      <WinningRateBanner />

      <div>{activeTab === 'calendar' ? <CalendarView /> : <ListView />}</div>
      {/* <Button text="새로운 직관 일기 작성하기" /> */}
      <div className="flex items-center justify-center py-20">
        <button
          onClick={handleClick}
          className="flex items-center rounded-xl px-74 py-16 bg-MainColor text-White text-18 font-light"
        >
          새로운 직관 일기 작성하기
        </button>
      </div>
    </>
  );
}
