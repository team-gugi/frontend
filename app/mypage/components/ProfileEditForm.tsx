'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // useRouter를 임포트

import CheckIcon from '../../public/icons/Circlecheck.svg';
import ErrorIcon from '../../public/icons/Circleerror.svg';

import { fetchUserProfile, IUserProfile } from '@/lib/api/fetchUserProfile';
import { updateUserProfile } from '@/lib/api/updateUserProfile';

export default function ProfileEditForm() {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [profile, setProfile] = useState<IUserProfile>({
    nickName: '',
    profileImg: '',
    team: '',
    introduction: '',
  });

  const [profileImgFile, setProfileImgFile] = useState<File | null>(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const userProfile = await fetchUserProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error(error);
        alert('프로필 정보를 불러오지 못했습니다.');
      }
    };

    loadUserProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const updatedProfile = await updateUserProfile({
        nickName: profile.nickName,
        team: profile.team,
        introduction: profile.introduction,
        profileImg: profileImgFile, // 선택적으로 파일 추가
      });

      alert('프로필이 성공적으로 수정되었습니다!');
      setShowSuccessModal(true); // 프로필 수정 성공 시 모달 표시
      setProfile(updatedProfile); // 성공한 데이터로 상태 업데이트
      setTimeout(() => {
        router.push('/mypage');
      }, 1500);
    } catch (error) {
      console.error(error);
      alert('프로필 수정에 실패했습니다.');
      setShowErrorModal(true); // 프로필 수정 실패 시 실패 모달 표시
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-40 px-38 py-20"
      >
        <div className="flex text-center items-center justify-center">
          <label htmlFor="profileImg" className="block relative cursor-pointer">
            <Image
              src={
                profileImgFile
                  ? URL.createObjectURL(profileImgFile)
                  : profile.profileImg
              }
              alt="프로필 이미지"
              className="rounded-full bg-BlockColor"
              width={100}
              height={100}
            />
            <span className="absolute inset-0 flex items-center justify-center text-12 font-normal text-White bg-SemiBlack bg-opacity-50 rounded-full">
              변경
            </span>
          </label>
          <input
            id="profileImg"
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImgFile(e.target.files?.[0] || null)}
            className="hidden"
          />
        </div>

        {/* 닉네임 */}
        <div className="flex items-center justify-center">
          {/* <label className="block text-sm font-medium">닉네임</label> */}
          <input
            type="text"
            value={profile.nickName}
            onChange={(e) =>
              setProfile({ ...profile, nickName: e.target.value })
            }
            className="w-[236px] px-10 py-10 text-17 text-center font-normal border-b-1 border-Gray outline-none placeholder:text-Gray focus:border-MainColor text-MainColor"
            required
          />
        </div>

        {/* 응원하는 구단 */}
        <div className="flex flex-col gap-13">
          <label className="flex font-normal text-16 text-SemiBlack">
            응원하는 구단
          </label>
          <select
            value={profile.team}
            onChange={(e) => setProfile({ ...profile, team: e.target.value })}
            className="border-1 border-solid border-Gray rounded-xl px-14 py-8 focus:outline-none focus:border-MainColor w-full"
          >
            {/* <option className="text-Gray">응원팀</option> */}
            <option value="키움 히어로즈">키움 히어로즈</option>
            <option value="KIA 타이거즈">KIA 타이거즈</option>
            <option value="한화 이글스">한화 이글스</option>
            <option value="삼성 라이온즈">삼성 라이온즈</option>
            <option value="롯데 자이언츠">롯데 자이언츠</option>
            <option value="KT 위즈">KT 위즈</option>
            <option value="SSG 랜더스">SSG 랜더스</option>
            <option value="LG 트윈스">LG 트윈스</option>
            <option value="두산 베어스">두산 베어스</option>
            <option value="NC 다이노스">NC 다이노스</option>
          </select>
        </div>

        {/* 자기소개 */}
        <div className="flex flex-col gap-13">
          <label className="flex font-normal text-16 text-SemiBlack">
            나를 소개하는 글
          </label>
          <textarea
            value={profile.introduction}
            onChange={(e) =>
              setProfile({ ...profile, introduction: e.target.value })
            }
            maxLength={100}
            placeholder="자기소개를 입력해주세요."
            className="w-full px-25 py-16 min-h-[124px] text-14 font-light leading-[1.6] rounded-[10px] bg-SemiWhite border focus:border-MainColor"
          />
          <div className="flex justify-end mt-2 text-14 text-extralight text-Gray">
            {profile.introduction.length}/100
          </div>
        </div>

        <button
          type="submit"
          className="bg-MainColor text-SemiWhite text-16 font-normal px-70 py-15 rounded-2xl"
        >
          수정 완료
        </button>
      </form>
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-SemiBlack bg-opacity-50">
          <div className="flex flex-col items-center justify-center gap-12 bg-BlockColor px-30 py-45 rounded-xl shadow-lg">
            <Image src={CheckIcon} alt="check icon" width={20} height={20} />
            <p className="text-18 font-extralight text-SemiBlack">
              <span className="text-MainColor font-extralight text-18">
                성공적으로 프로필 수정
              </span>
              이 완료되었습니다.
            </p>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-SemiBlack bg-opacity-50">
          <div className="flex flex-col items-center justify-center gap-12 bg-BlockColor px-30 py-45 rounded-xl shadow-lg">
            <Image src={ErrorIcon} alt="check icon" width={20} height={20} />
            <p className="text-18 font-extralight text-SemiBlack">
              프로필 수정에
              <span className="text-Red font-extralight text-18">실패</span>
              했습니다. 다시 시도해주세요.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
