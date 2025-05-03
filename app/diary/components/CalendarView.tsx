'use client';

import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { diaryAtom } from '@/recoil/diary/diaryAtom';

interface DiaryEntry {
  gameDate: string; // 'YYYY-MM-DD' 형식
  gameResult: 'WIN' | 'LOSE' | 'DRAW';
}

export default function CalendarView() {
  const diaries = useRecoilValue(diaryAtom);

  const diaryEntries: DiaryEntry[] = diaries.map((diary) => ({
    gameDate: diary.gameDate,
    gameResult: diary.gameResult,
  }));

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      // const formattedDate = date.toISOString().split('T')[0];
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const diaryEntry = diaryEntries.find(
        (entry) => entry.gameDate === formattedDate,
      );

      if (diaryEntry) {
        let dotColor = '';
        if (diaryEntry.gameResult === 'WIN') {
          dotColor = 'bg-MainColor'; // 승리: 초록색
        } else if (diaryEntry.gameResult === 'LOSE') {
          dotColor = 'bg-Gray';
        } else {
          dotColor = 'bg-BlockColor';
        }

        return (
          <div className={`w-10 h-10 rounded-full ${dotColor} mx-auto mt-1`} />
        );
      }
      // 일기가 없는 경우 빈 칸 반환
      return <div className="w-10 h-10 mx-auto mt-1" />;
    }
    return null;
  };

  return (
    <div className="flex justify-center min-w-[375px] max-w-[600px] mx-auto ">
      <Calendar
        locale="ko-KR" // 한국어 locale 설정
        calendarType="gregory" //일요일부터 시작
        tileContent={tileContent} // 타일의 내용 설정
        formatDay={(locale, date) => moment(date).format('DD')} //'일' 생략
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
      />
    </div>
  );
}
