export interface IUpdateDiaryInfo {
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
  gameImg?: File;
}

export interface IUpdateDiaryResponse {
  code: string;
  message: string;
  isSuccess: boolean;
}

export const editDiaryApi = async ({
  diaryId,
  diaryInfo,
  gameImg,
}: IUpdateDiaryInfo): Promise<IUpdateDiaryResponse> => {
  const formData = new FormData();
  formData.append('diaryId', diaryId);
  formData.append('diaryInfo', JSON.stringify(diaryInfo));
  if (gameImg) {
    formData.append('gameImg', gameImg);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/diary`,
      {
        method: 'PUT',
        body: formData,
        credentials: 'include',
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.log('서버 응답 오류:', errorText);
      throw new Error('일기 수정 요청 실패');
    }

    const result = (await response.json()) as IUpdateDiaryResponse;
    return result;
  } catch (error) {
    console.log('실패', error);
    console.log('일기 수정 API 호출 오류:', error);
    throw error;
  }
};
