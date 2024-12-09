interface ITeamDetailsResponse {
  code: string;
  message: string;
  payload: {
    teamCode: string;
    teamName: string;
    description: string;
    instagram: string;
    youtube: string;
    ticketShop: string;
    mdShop: string;
  };
  isSuccess: boolean;
}

export const getTeamDetails = async (teamCode: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/team/details?teamCode=${teamCode}`,
  );

  if (!response.ok) {
    throw new Error('팀별 상세 정보를 불러오는 데 실패했습니다');
    console.log('팀코드', teamCode);
  }

  const data: ITeamDetailsResponse = await response.json();

  if (!data.isSuccess) {
    throw new Error(data.message || '팀별 상세 정보를 찾을 수 없습니다');
  }

  return data.payload;
};
