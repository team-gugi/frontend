import { IUserProfile } from './fetchUserProfile';

export interface IUserProfileUpdate {
  nickName: string;
  team: string;
  introduction: string;
  profileImg?: File | null;
}

export interface IUpdateResponse {
  code: string;
  message: string;
  payload: IUserProfile;
  isSuccess: boolean;
}

export const updateUserProfile = async (
  userProfile: IUserProfileUpdate,
): Promise<IUserProfile> => {
  try {
    const formData = new FormData();
    formData.append(
      'UserDTO',
      JSON.stringify({
        nickName: userProfile.nickName,
        team: userProfile.team,
        introduction: userProfile.introduction,
      }),
    );

    if (userProfile.profileImg) {
      formData.append('profileImg', userProfile.profileImg);
    }

    console.log('formData : ', formData);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/info`,
      {
        method: 'PUT',
        body: formData,
        credentials: 'include',
      },
    );

    const data: IUpdateResponse = await response.json();

    if (data.isSuccess) {
      return data.payload; // 성공적으로 수정된 사용자 프로필 반환
    } else {
      throw new Error('프로필 수정 실패: ' + data.message);
    }
  } catch (error) {
    console.error(error);
    throw new Error('프로필 수정 요청 중 에러가 발생했습니다.');
  }
};
