'use client';
import React, { useState } from 'react';
import WinningRateBanner from './WinningRateBanner';
import CalendarView from './CalendarView';
import ListView from './ListView';
import Button from './Button';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'all'>('calendar');

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
      <Button text="새로운 직관 일기 작성하기" />
    </>
  );
}
