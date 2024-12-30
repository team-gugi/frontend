export interface IUpdateDiaryPayload {
  diaryId: string;
  diaryInfo: {
    gameDate: string;
    gameStadium: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    content: string;
  };
  gameImg: string;
}

export const updateDiaryDetails = async (
  payload: IUpdateDiaryPayload,
): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('diaryId', payload.diaryId);
    formData.append('diaryInfo', JSON.stringify(payload.diaryInfo));
    formData.append('gameImg', payload.gameImg);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/diary`,
      {
        method: 'PUT',
        body: formData,
        credentials: 'include',
      },
    );

    const responseBody = await response.json();

    if (!response.ok || !responseBody.isSuccess) {
      throw new Error(responseBody.message || '수정 요청 실패');
    }
  } catch (error) {
    console.error('Error updating diary:', error);
    throw error;
  }
};
