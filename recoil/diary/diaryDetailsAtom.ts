import { atom } from 'recoil';

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

export const diaryDetailsAtom = atom<IDiaryDetails[]>({
  key: 'diaryDetailsAtom',
  default: [],
});
