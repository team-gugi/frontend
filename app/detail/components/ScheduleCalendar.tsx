'use client';

import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ScheduleCalendar.css';
import moment from 'moment';
import { useRecoilState, useRecoilValue } from 'recoil';
import { scheduleAtom, selectedDateAtom } from '@/recoil/scheduleAtom';
import ScheduleModal from './ScheduleModal';

export default function ScheduleCalendar() {
  const schedule = useRecoilValue(scheduleAtom);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const parseSpecificDate = (
    specificDate: string,
    year: number,
  ): Date | null => {
    const match = specificDate.match(/(\d{2})\.(\d{2})/); // "03.24(일)"에서 "03.24" 추출
    if (!match) return null;

    const [, month, day] = match;
    return new Date(year, parseInt(month) - 1, parseInt(day));
  };

  const getLogoForDate = (date: Date) => {
    const currentYear = date.getFullYear(); // 선택된 날짜의 연도
    const daySchedule = schedule.flatMap((month) => {
      // month.date에서 연도를 추출
      const scheduleYear = parseInt(month.date.split('.')[0]);
      if (scheduleYear !== currentYear) return []; // 연도가 다른 데이터는 무시

      return month.specificSchedule.filter((game) => {
        const gameDate = parseSpecificDate(game.specificDate, scheduleYear);
        return gameDate?.toDateString() === date.toDateString();
      });
    });

    // 경기가 없는 경우에도 빈 칸 표시
    if (daySchedule.length === 0) {
      return <div className="w-18 h-13 mx-auto mt-1 bg-transparent" />;
    }

    return daySchedule.map((game, index) => (
      <img
        key={index}
        src={game.logoUrl}
        alt={`${game.homeTeam} vs ${game.awayTeam}`}
        className="w-18 h-13 mx-auto mt-1"
      />
    ));
  };

  console.log('schedule:', schedule);
  schedule.forEach((month) => {
    month.specificSchedule.forEach((game) => {
      console.log(
        'month',
        month,
        'specificDate:',
        game.specificDate,
        'logoUrl:',
        game.logoUrl,
      );
    });
  });

  const handleDateClick = (date: Date) => {
    // 선택한 날짜를 문자열로 변환하여 Recoil 상태에 저장
    console.log('선택된 날짜', date);
    console.log('선택된 날짜', moment(date).format('MM.DD(ddd)'));
    const dayInKorean = ['일', '월', '화', '수', '목', '금', '토']; // 요일을 한글로 변환
    const formattedDate = `${moment(date).format('MM.DD')}(${dayInKorean[date.getDay()]})`; // ex: "02.12(수)"
    setSelectedDate(formattedDate);
    // setSelectedDate(moment(date).format('MM.DD(ddd)')); // ex: "03.21(목)"
    setIsModalOpen(true);
  };
  console.log('selectedDate', selectedDate);

  return (
    <div className="flex flex-col justify-center pt-40 pb-60 gap-10">
      <span className="flex px-24 items-start text-Gray font-medium text-14">
        경기 일정
      </span>
      <Calendar
        locale="ko-KR" // 한국어 locale 설정
        calendarType="gregory" //일요일부터 시작
        tileContent={({ date }) => <>{getLogoForDate(date)}</>} // 각 날짜에 로고 표시
        formatDay={(locale, date) => moment(date).format('DD')} //'일' 생략
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        onClickDay={handleDateClick}
      />
      {isModalOpen && (
        <ScheduleModal onClose={() => setIsModalOpen(false)} /> // 모달 렌더링
      )}
    </div>
  );
}
