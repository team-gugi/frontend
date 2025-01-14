// lib/api/getUserProfile.ts
interface IUserProfile {
  nickName: string;
  profileImg: string;
  team: string;
  introduction: string;
}

interface IApiResponse {
  code: string;
  message: string;
  payload: IUserProfile;
  isSuccess: boolean;
}

export const fetchUserProfile = async (): Promise<IUserProfile> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/info`,
      {
        method: 'GET',
      },
    );
    const data: IApiResponse = await response.json();

    if (data.isSuccess) {
      return data.payload; // IUserProfile 타입 리턴
    } else {
      throw new Error('유저 프로필 조회 실패');
    }
  } catch (error) {
    console.error(error);
    throw new Error('유저 프로필을 조회하는데 에러가 발생했습니다');
  }
};
