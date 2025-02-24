import { atom } from 'recoil';
export interface DiaryEntry {
  diaryId: string;
  gameDate: string; // 'YYYY-MM-DD' 형식
  gameResult: 'WIN' | 'LOSE' | 'DRAW'; // 대소문자 그대로 사용
  homeTeam: string;
  awayTeam: string;
  gameStadium: string;
}

// export const diaryAtom = atom<DiaryEntry[]>({
//   key: 'diaryAtom',
//   default: [],
// });

export const diaryAtom = atom<DiaryEntry[]>({
  key: 'diaryAtom',
  default: [
    {
      diaryId: '1',
      gameDate: '2024-02-04',
      homeTeam: '삼성',
      awayTeam: '롯데',
      gameStadium: '광주 기아 챔피언스 필드',

      gameResult: 'WIN', // 목업 데이터에 추가
    },
    {
      diaryId: '2',
      gameDate: '2024-02-04',
      homeTeam: '삼성',
      awayTeam: '롯데',
      gameStadium: '광주 기아 챔피언스 필드',

      gameResult: 'LOSE', // 목업 데이터에 추가
    },
    {
      diaryId: '3',
      gameDate: '2024-02-04',
      homeTeam: '삼성',
      awayTeam: '롯데',
      gameStadium: '광주 기아 챔피언스 필드',

      gameResult: 'WIN', // 목업 데이터에 추가
    },
  ],
});
