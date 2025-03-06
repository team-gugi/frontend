'use client';

import { useState, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { scheduleAtom, selectedDateAtom } from '@/recoil/scheduleAtom';
import { fetchTeamSchedule } from '@/lib/api/fetchTeamScheduleApi';
import ScheduleCalendar from './ScheduleCalendar';
import ScheduleModal from './ScheduleModal';

interface ScheduleAndModalProps {
  teamCode: string;
}

export default function ScheduleAndModal({ teamCode }: ScheduleAndModalProps) {
  const [schedule, setSchedule] = useRecoilState(scheduleAtom);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadSchedule = async () => {
      try {
        const schedules = await fetchTeamSchedule(teamCode);
        setSchedule(schedules);
      } catch (error) {
        console.error('경기 일정을 불러오는 데 실패했습니다.', error);
      }
    };

    loadSchedule();
  }, [teamCode, setSchedule]); // teamCode가 변경될 때마다 실행

  return (
    <>
      <div>
        <ScheduleCalendar />
        {/* <ScheduleModal />
        {isModalOpen && <ScheduleModal onClose={() => setIsModalOpen(false)} />} */}
      </div>
    </>
  );
}
