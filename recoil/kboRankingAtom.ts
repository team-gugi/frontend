import { atom } from 'recoil';

export interface IkboRankingState {
  teamRank: number;
  team: string;
  game: number;
  win: number;
  lose: number;
  draw: number;
  winningRate: number;
  difference: number;
}

export const kboRankingAtom = atom<IkboRankingState[]>({
  key: 'kboRankingAtom',
  default: [],
});
