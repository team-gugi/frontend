import { profileAtom } from '@/recoil/profileAtom';
import { redirect, useRouter } from 'next/navigation';
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
      age: profile.age,
      sex: profile.sex,
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
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/onboarding`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${registerToken}`,
        },
        body: formData,
        credentials: 'include',
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('서버 응답:', errorText);
      throw new Error('요청 실패');
    }

    const data = await response.json();
    const redirectUrl = data.redirectUrl;
    console.log('data', data);

    // document.cookie = `access_token=${data.access_token}; path=/; SameSite=None; Secure`;
    // document.cookie = `refresh_token=${data.refresh_token}; path=/; SameSite=None; Secure`;

    document.cookie = `access_token=${data.access_token}; path=/; SameSite=None; Secure;`;
    document.cookie = `refresh_token=${data.refresh_token}; path=/; SameSite=None; Secure`;

    console.log(document.cookie);
    return true;
    // window.location.href = '/home';
    // window.location.href = '/onboarding';

    // useRouter().push(redirectUrl);
  } catch (error) {
    console.log('프로필 등록 오류', error);
    return false;
  }
};
export default registerProfile;
