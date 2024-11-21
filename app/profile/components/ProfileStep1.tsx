import React, { useState } from 'react';

const ProfileStep1 = ({ onNext }: { onNext: () => void }) => {
  const [nickname, setNickname] = useState<string>('');
  const [photo, setPhoto] = useState<string | null>(null);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 15) setNickname(value);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    console.log(file); // 파일 확인
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
          {photo ? (
            <img
              src={photo}
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
          value={nickname}
          placeholder="닉네임을 입력해주세요     (0/15)"
          onChange={handleNicknameChange}
          className="w-[236px] px-10 py-10 text-17 text-center font-normal border-b-1 border-Gray outline-none placeholder:text-Gray focus:border-MainColor text-MainColor"
        />
        {/* <p className="text-sm text-MainColor mt-2">{nickname.length}/15</p> */}
      </div>

      {/* 다음으로 넘어가기 버튼 */}
      <button
        onClick={onNext}
        disabled={!nickname || !photo}
        className={`mt-60 px-85 py-15 rounded-[20px] ${
          nickname && photo
            ? 'bg-MainColor text-White'
            : 'bg-SemiWhite text-SemiBlack cursor-not-allowed'
        }`}
      >
        다음으로 넘어가기
      </button>
    </div>
  );
};
export default ProfileStep1;
