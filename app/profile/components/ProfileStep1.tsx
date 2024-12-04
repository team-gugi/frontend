import { profileAtom } from '@/recoil/profileAtom';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface ProfileStep1Props {
  onNext: () => void;
}
const ProfileStep1: React.FC<ProfileStep1Props> = ({ onNext }) => {
  // const ProfileStep1 = ({ onNext }: { onNext: () => void }) => {
  const [nickName, setNickName] = useState<string>('');
  const [profileImg, setProfileImg] = useState<File | null>(null);

  const [profile, setProfile] = useRecoilState(profileAtom);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 15) setNickName(value);
    setProfile((prev) => ({ ...prev, nickName: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProfileImg(file);
    setProfile((prevProfile) => ({
      ...prevProfile,
      profileImg: file, // File | null을 상태에 업데이트
    }));

    // const file = (e.target as HTMLInputElement).files?.[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setPhoto(reader.result as string);
    //     setProfile((prevProfile) => ({
    //       ...prevProfile,
    //       photo: reader.result as string, // string 타입으로 변환
    //     }));
    //   };
    //   reader.readAsDataURL(file);
    // }
    console.log(file);
  };

  const handleSave = () => {
    console.log('step1 상태 화인:', profile); // 상태 확인
  };

  return (
    <div className="flex flex-col items-center w-full gap-47">
      {/* 페이지 상단 타이틀     */}
      <div className="flex flex-col items-center w-full gap-16">
        <p className="text-20 font-semibold">반가워요!</p>
        <p className="text-20 font-semibold">사진과 닉네임을 설정해주세요</p>
      </div>

      {/* 프로필 사진 업로드 */}
      <div className="relative">
        <label
          htmlFor="photo-upload"
          className="flex items-center justify-center w-120 h-120 rounded-full bg-SemiWhite cursor-pointer overflow-hidden"
        >
          {profileImg ? (
            <img
              src={URL.createObjectURL(profileImg)}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">+</span>
          )}
        </label>

        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoUpload}
        />
      </div>

      {/* 닉네임 입력창 */}
      <div className="w-full flex items-center justify-center">
        <input
          type="text"
          value={nickName}
          placeholder="닉네임을 입력해주세요     (0/15)"
          onChange={handleNicknameChange}
          className="w-[236px] px-10 py-10 text-17 text-center font-normal border-b-1 border-Gray outline-none placeholder:text-Gray focus:border-MainColor text-MainColor"
        />
      </div>

      <button
        onClick={() => {
          handleSave();
          onNext();
        }}
        disabled={!nickName || !profileImg}
        className={`mt-60 px-85 py-15 rounded-[20px] ${
          nickName && profileImg
            ? 'bg-MainColor text-White font-medium'
            : 'bg-SemiWhite text-SemiBlack font-medium cursor-not-allowed'
        }`}
      >
        다음으로 넘어가기
      </button>
    </div>
  );
};
export default ProfileStep1;
