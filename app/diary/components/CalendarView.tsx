'use client';

import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';
import moment from 'moment';

interface DiaryEntry {
  date: string; // 'YYYY-MM-DD' 형식
  result: 'win' | 'lose' | 'draw';
}

const diaryEntries: DiaryEntry[] = [
  { date: '2024-07-10', result: 'win' },
  { date: '2024-07-12', result: 'lose' },
  { date: '2024-07-15', result: 'draw' },
];

export default function CalendarView() {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      const diaryEntry = diaryEntries.find(
        (entry) => entry.date === formattedDate,
      );

      if (diaryEntry) {
        let dotColor = '';
        if (diaryEntry.result === 'win') {
          dotColor = 'bg-MainColor'; // 승리: 초록색
        } else if (diaryEntry.result === 'lose') {
          dotColor = 'bg-BlockColor'; // 패배: 빨간색
        } else {
          dotColor = 'bg-BlockColor'; // 비김: 노란색
        }

        return (
          <div className={`w-2 h-2 rounded-full ${dotColor} mx-auto mt-1`} />
        );
      }
    }
    return null;
  };

  return (
    <div className="flex justify-center ">
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
