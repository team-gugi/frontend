import { IkboRankingState } from '@/recoil/kboRankingAtom';

interface KboRankingResponse {
  code: string;
  message: string;
  payload: IkboRankingState[];
  isSuccess: boolean;
}

export const getKboRanking = async (): Promise<IkboRankingState[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/main/kbo-ranking`,
    { cache: 'no-store' },
  );
  if (!response.ok) {
    throw new Error('KBO 실시간 순위 데이터를 가져오는 데 실패 했습니다');
  }
  const data: KboRankingResponse = await response.json();
  return data.payload;
};
