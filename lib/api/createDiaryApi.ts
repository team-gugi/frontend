export interface IDiaryInfo {
  gameDate: string;
  gameStadium: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  content: string;
}
export interface IPostDiaryResponse {
  code: string;
  message: string;
  isSuccess: boolean;
}

export const postDiaryApi = async (
  diaryInfo: IDiaryInfo,
  gameImg?: File,
): Promise<IPostDiaryResponse> => {
  const formData = new FormData();
  formData.append('diaryInfo', JSON.stringify(diaryInfo));
  if (gameImg) {
    formData.append('gameImg', gameImg);
  }

  try {
    const response = await fetch('/api/v1/diary', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('직관 일기 등록에 실패했습니다');
    }

    const result = (await response.json()) as IPostDiaryResponse;
    return result;
  } catch (error) {
    console.log('실패', error);
    console.error('Error posting diary:', error);
    throw error;
  }
};
