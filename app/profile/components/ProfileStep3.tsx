import { profileAtom } from '@/recoil/profileAtom';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import registerProfile from '@/lib/api/profileApi';
interface ProfileStep3Props {
  onBack: () => void;
  registerToken: string;
}

const ProfileStep3: React.FC<ProfileStep3Props> = ({
  onBack,
  registerToken,
}) => {
  const teams = [
    'KIA 타이거즈',
    'KT 위즈',
    'LG 트윈스',
    'NC 다이노스',
    'SSG 랜더스',
    '두산 베어스',
    '롯데 자이언츠',
    '삼성 라이온즈',
    '키움 히어로즈',
    '한화 이글스',
    '없음',
  ];

  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const handleTeamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const team = e.target.value;
    setSelectedTeam(team);
    setProfile((prevProfile) => ({
      ...prevProfile,
      team: team,
    }));
  };
  console.log(profile);

  // const handleProfileSubmit = async () => {
  //   if (registerToken) {
  //     await registerProfile(registerToken, profile);
  //   } else {
  //     console.log('register token이 없음!');
  //   }
  // };

  const handleProfileSubmit = async () => {
    if (registerToken) {
      try {
        const success = await registerProfile(registerToken, profile);

        // registerProfile이 성공적으로 프로필을 등록했으면 /home으로 리디렉션
        if (success) {
          router.push('/home');
        }
      } catch (error) {
        // 프로필 등록 실패 시 에러 메시지 표시
        setErrorMessage('프로필 등록에 실패했습니다. 다시 시도해주세요.');
      }
    } else {
      setErrorMessage('프로필 등록에 실패했습니다. 다시 시도해주세요.');
      console.log('register token이 없음!');
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full gap-55">
        <p className="text-20 font-semibold">응원하는 구단을 선택해주세요</p>

        <div className="flex flex-col items-center w-full px-36">
          <div className="flex flex-wrap">
            {teams.map((team) => (
              <label
                key={team}
                className={`flex items-center gap-10 w-1/2 my-14 font-semibold text016 cursor-pointer ${selectedTeam === team ? 'text-MainColor' : 'text-SemiBlack'}`}
              >
                <input
                  type="radio"
                  name="team"
                  value={team}
                  checked={selectedTeam === team}
                  onChange={handleTeamChange}
                  className=" appearance-none w-24 h-24 border-4 border-BlockColor rounded-full checked:border-MainColor transition-all transform hover:scale-110"
                />
                {team}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleProfileSubmit}
        disabled={selectedTeam === ''}
        className={`mt-60 px-85 py-15 rounded-[20px] ${
          selectedTeam
            ? 'bg-MainColor text-White font-medium'
            : 'bg-SemiWhite text-SemiBlack font-medium cursor-not-allowed'
        }`}
      >
        프로필 설정 완료
      </button>

      {errorMessage && (
        <div className=" text-Red flex items-center py-20">{errorMessage}</div>
      )}
    </div>
  );
};
export default ProfileStep3;
