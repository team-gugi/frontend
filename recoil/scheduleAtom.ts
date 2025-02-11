import { atom } from 'recoil';
import { IMonthlySchedule } from '@/lib/api/fetchTeamScheduleApi';

export const scheduleAtom = atom<IMonthlySchedule[]>({
  key: 'scheduleAtom',
  default: [], // 초기값: 빈 배열 (경기 일정 데이터가 없는 상태)
});

export const selectedDateAtom = atom<string | null>({
  key: 'selectedDateAtom',
  default: null, // 유저가 선택한 날짜, 초기값: null (선택된 날짜가 없는 상태)
});

// export const selectedDateAtom = atom<Date | null>({
//   key: 'selectedDateAtom',
//   default: null, // 유저가 선택한 날짜, 초기값: null (선택된 날짜가 없는 상태)
// });
