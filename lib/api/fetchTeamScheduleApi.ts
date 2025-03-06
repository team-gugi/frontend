export interface ISpecificSchedule {
  specificDate: string; // 예: "03.24(일)" ;
  homeTeam: string;
  awayTeam: string;
  logoUrl: string;
  homeScore: number | null;
  awayScore: number | null;
  time: string;
  stadium: string;
  cancellationReason: string | null;
}

export interface IMonthlySchedule {
  date: string; // 예: "2024.03"
  specificSchedule: ISpecificSchedule[];
}

export const fetchTeamSchedule = async (
  teamCode: string,
): Promise<IMonthlySchedule[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/team/schedule?teamCode=${teamCode}`,
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error('경기 일정을 불러오는 데 실패했습니다.');
    }

    const data = await response.json();

    if (data.code === '200' && Array.isArray(data.payload)) {
      return data.payload as IMonthlySchedule[];
    }

    throw new Error('유효한 데이터가 없습니다.');
  } catch (error) {
    console.error('API 호출 오류:', error);
    return [];
  }
};
