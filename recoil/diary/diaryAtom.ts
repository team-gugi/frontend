import { atom } from 'recoil';
export interface DiaryEntry {
  diaryId: string;
  gameDate: string; // 'YYYY-MM-DD' 형식
  gameResult: 'WIN' | 'LOSE' | 'DRAW'; // 대소문자 그대로 사용
  homeTeam: string;
  awayTeam: string;
  gameStadium: string;
}

export const diaryAtom = atom<DiaryEntry[]>({
  key: 'diaryAtom',
  default: [],
});
