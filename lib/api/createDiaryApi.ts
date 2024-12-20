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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/diary`,
      {
        method: 'POST',
        body: formData,
        credentials: 'include',
      },
    );

    console.log('FormData(array 형식):', Array.from(formData.entries()));
    const responseBody = await response.text();
    console.log('Response Body:', responseBody);

    if (!response.ok) {
      console.log(document.cookie);
      throw new Error(
        `직관 일기 등록에 실패했습니다. 상태코드: ${response.status}, 서버응답: ${responseBody}`,
      );
    }

    const result = (await response.json()) as IPostDiaryResponse;
    return result;
  } catch (error) {
    console.error('Error posting diary:', error);
    throw error;
  }
};
