import { profileAtom } from '@/recoil/profileAtom';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

const registerProfile = async (registerToken: string, profile: any) => {
  const formData = new FormData();
  // formData.append('nickName', profile.nickName);
  // formData.append('introduction', profile.introduction);
  // formData.append('team', profile.team);

  formData.append(
    'OnboardingInfoDTO',
    JSON.stringify({
      nickName: profile.nickName,
      introduction: profile.introduction,
      team: profile.team,
    }),
  );

  if (profile.profileImg) {
    formData.append('profileImg', profile.profileImg);
  }
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  console.log('Register Token:', registerToken);

  try {
    const response = await fetch(
      'http://52.79.47.101:8080/api/v1/users/onboarding',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${registerToken}`,
        },
        body: formData,
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('서버 응답:', errorText);
      throw new Error('요청 실패');
    }

    const data = await response.json();
    const redirectUrl = data.redirectUrl;

    document.cookie = `access_token=${data.accessToken}; path=/`;
    document.cookie = `refresh_token=${data.refreshToken}; path=/`;

    // useRouter().push(redirectUrl);
  } catch (error) {
    console.log('프로필 등록 오류', error);
  }
};
export default registerProfile;
