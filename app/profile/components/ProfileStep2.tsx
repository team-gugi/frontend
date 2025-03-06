import { profileAtom } from '@/recoil/profileAtom';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

interface ProfileStep2Props {
  onNext: () => void;
  onBack: () => void;
}

const ProfileStep2: React.FC<ProfileStep2Props> = ({ onNext, onBack }) => {
  const [introduction, setIntroduction] = useState<string>('');
  const maxLength = 100;
  const [profile, setProfile] = useRecoilState(profileAtom);

  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setIntroduction(value);
    setProfile((prevProfile) => ({
      ...prevProfile,
      introduction: value,
    }));
  };

  const handleSave = () => {
    console.log('step2 상태 확인 : ', profile);
  };

  return (
    <div className="flex flex-col items-center w-full gap-41">
      {/* 페이지 상단 타이틀 */}
      <p className="text-20 font-semibold">자신을 소개하는 한 줄 작성하기</p>
      {/* <div className="w-136 h-136 bg-SemiWhite rounded-full"></div> */}
      {/* 프로필 이미지 표시 */}
      <div className="w-136 h-136 bg-SemiWhite rounded-full overflow-hidden">
        {profile.profileImg ? (
          <img
            src={URL.createObjectURL(profile.profileImg)} // profileImg가 있으면 이미지를 표시
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            +
          </div>
        )}
      </div>
      {/* 자기 소개 입력 */}
      <div className="relative w-full max-w-[285px] max-h-[124px]">
        <textarea
          value={introduction}
          onChange={handleIntroductionChange}
          placeholder="간단한 소개로 많은 사람들이 당신에 대해 알 수 있게 해주세요! (최대 100자)"
          maxLength={maxLength}
          className="w-full px-25 py-16 text-14 font-light leading-[1.6] rounded-[10px] bg-SemiWhite border focus:border-MainColor"
          rows={5}
        />

        <div className="flex justify-end mt-4 text-14 text-light text-Gray">
          <span>
            {introduction.length}/{maxLength}
          </span>
        </div>
      </div>

      <button
        onClick={() => {
          handleSave();
          onNext();
        }}
        disabled={introduction.length === 0}
        className={`mt-60 px-85 py-15 rounded-[20px] ${
          introduction.length > 0
            ? 'bg-MainColor text-White font-medium'
            : 'bg-SemiWhite text-SemiBlack font-medium cursor-not-allowed'
        }`}
      >
        다음으로 넘어가기
      </button>
    </div>
  );
};
export default ProfileStep2;
