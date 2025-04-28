'use client';
import { profileAtom } from '@/recoil/profileAtom';
import React, { use, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface ProfileStep1Props {
  onNext: () => void;
}
const ProfileStep1: React.FC<ProfileStep1Props> = ({ onNext }) => {
  // const ProfileStep1 = ({ onNext }: { onNext: () => void }) => {
  const [nickName, setNickName] = useState<string>('');
  const [profileImg, setProfileImg] = useState<File | null>(null);

  const [sex, setSex] = useState<string>('');
  const [age, setAge] = useState<string>('');

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

  const handleSexChange = (selectedSex: string) => {
    setSex(selectedSex);
    setProfile((prev) => ({ ...prev, sex: selectedSex }));
  };

  const handleAgeChange = (selectedAge: string) => {
    setAge(selectedAge);
    setProfile((prev) => ({ ...prev, age: selectedAge }));
  };

  const handleSave = () => {
    console.log('step1 상태 화인:', profile); // 상태 확인
  };

  return (
    <div className="flex flex-col items-center w-full gap-53">
      {/* 프로필 이미지, 닉네임 입력 */}
      <div className="flex flex-col items-center w-full gap-40">
        {/* 페이지 상단 타이틀     */}
        <div className="flex flex-col items-center w-full gap-16">
          <p className="text-20 font-semibold">반가워요!</p>
          <p className="text-20 font-semibold">기본 프로필을 설정해주세요</p>
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
      </div>

      {/* 성별, 나이대 선택 */}
      <div className="flex flex-col gap-28 w-[308px]">
        {/* 성별 선택 */}
        <div className="flex flex-col items-start gap-10">
          <span className="text-16 font-semibold text-SemiBlack">성별 *</span>
          <div className="flex gap-2 w-full">
            {['남자', '여자'].map((option) => (
              <button
                key={option}
                onClick={() => handleSexChange(option)}
                className={`flex-grow py-14 text-16 ${
                  sex === option
                    ? 'bg-SemiWhite text-MainColor border-1 border-MainColor font-semibold'
                    : 'bg-SemiWhite text-SemiBlackfont-normal'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* 연령대 선택 */}
        <div className="flex flex-col items-start gap-10 ">
          <span className="text-16 font-semibold text-SemiBlack">연령대 *</span>
          <div className="flex gap-2 w-full">
            {['10대', '20대', '30대', '그 외'].map((option) => (
              <button
                key={option}
                onClick={() => handleAgeChange(option)}
                className={`flex-grow py-14 text-16 ${
                  age === option
                    ? 'bg-SemiWhite text-MainColor border-1 border-MainColor font-semibold'
                    : 'bg-SemiWhite text-SemiBlackfont-normal'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          handleSave();
          onNext();
        }}
        disabled={!nickName || !profileImg || !age || !sex}
        className={`mt-60 px-85 py-15 rounded-[20px] ${
          nickName && profileImg && age && sex
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

// return (
//   <div className="flex flex-col items-center w-full gap-47">
//     {/* 페이지 상단 타이틀     */}
//     <div className="flex flex-col items-center w-full gap-16">
//       <p className="text-20 font-semibold">반가워요!</p>
//       <p className="text-20 font-semibold">사진과 닉네임을 설정해주세요</p>
//     </div>

//     {/* 프로필 사진 업로드 */}
//     <div className="relative">
//       <label
//         htmlFor="photo-upload"
//         className="flex items-center justify-center w-120 h-120 rounded-full bg-SemiWhite cursor-pointer overflow-hidden"
//       >
//         {profileImg ? (
//           <img
//             src={URL.createObjectURL(profileImg)}
//             alt="Uploaded"
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <span className="text-gray-500">+</span>
//         )}
//       </label>

//       <input
//         id="photo-upload"
//         type="file"
//         accept="image/*"
//         className="hidden"
//         onChange={handlePhotoUpload}
//       />
//     </div>

//     {/* 닉네임 입력창 */}
//     <div className="w-full flex items-center justify-center">
//       <input
//         type="text"
//         value={nickName}
//         placeholder="닉네임을 입력해주세요     (0/15)"
//         onChange={handleNicknameChange}
//         className="w-[236px] px-10 py-10 text-17 text-center font-normal border-b-1 border-Gray outline-none placeholder:text-Gray focus:border-MainColor text-MainColor"
//       />
//     </div>

//     <button
//       onClick={() => {
//         handleSave();
//         onNext();
//       }}
//       disabled={!nickName || !profileImg}
//       className={`mt-60 px-85 py-15 rounded-[20px] ${
//         nickName && profileImg
//           ? 'bg-MainColor text-White font-medium'
//           : 'bg-SemiWhite text-SemiBlack font-medium cursor-not-allowed'
//       }`}
//     >
//       다음으로 넘어가기
//     </button>
//   </div>
// );
