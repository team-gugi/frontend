export interface IFood {
  foodName: string;
  foodLocation: string;
  foodImg: string;
}

export interface IStadiumDetails {
  code: string;
  message: string;
  payload: {
    stadiumName: string;
    stadiumLocation: string;
    teamName: string;
    foodList: IFood[];
  };
  isSuccess: boolean;
}

export const getStadiumDetails = async (stadiumCode: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/stadium?stadiumCode=${stadiumCode}`,
  );
  console.log(stadiumCode);

  if (!response.ok) {
    throw new Error('구장 상세 정보를 불러오는 데 실패했습니다');
  }
  const data: IStadiumDetails = await response.json();

  if (!data.isSuccess) {
    throw new Error(data.message || '구장 상세 정보를 찾을 수 없습니다');
  }

  return data.payload;
};
