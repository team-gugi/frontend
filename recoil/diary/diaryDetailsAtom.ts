import { atom } from 'recoil';
// import { DiaryEntry } from './diaryAtom';

export interface IDiaryDetails {
  diaryId: string;
  gameDate: string;
  gameStadium: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  gameImg: string;
  content: string;
  gameResult: 'WIN' | 'LOSE' | 'DRAW';
}

export const diaryDetailsAtom = atom<IDiaryDetails | null>({
  key: 'diaryDetailsAtom',
  default: null,
});
