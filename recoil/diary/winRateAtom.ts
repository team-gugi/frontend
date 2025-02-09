import { atom } from 'recoil';

export interface IWinRateData {
  nickName: string;
  winRate: string;
  totalDiaryCount: number;
  totalWins: number;
}

export const winRateAtom = atom<IWinRateData | null>({
  key: 'winRateAtom',
  default: null,
});
