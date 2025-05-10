'use client';
import Image from 'next/image';

import Icon from '../../public/icons/Group 960.png';
import { useEffect, useState } from 'react';
import { fetchUserProfile, IUserProfile } from '@/lib/api/fetchUserProfile';
import { useRouter } from 'next/navigation';

const SkeletonProfile = () => (
  <div className="flex flex-col px-24 pt-12 pb-24 gap-18 animate-pulse">
    <div className="flex flex-row items-center gap-12">
      <div className="w-40 h-40 bg-LightGray rounded   "></div>
      <div className="w-66 h-24 bg-LightGray rounded"></div>
    </div>
    <div className="flex flex-col gap-6">
      <div className="w-[224px] h-16 bg-LightGray rounded"></div>
      <div className="w-[206px] h-16 bg-LightGray rounded"></div>
    </div>
  </div>
);

const ProfileFetchError = () => (
  <div className="flex flex-col px-24 pt-12 pb-24 gap-12">
    <p className="text-16 text-MainColor font-normal">
      프로필 정보를 불러오지 못했습니다.😢
    </p>
    <p className="text-14 text-SemiBlack font-normal">
      네트워크 상태를 확인하거나 새로고침 해주세요.
    </p>
  </div>
);

export default function ProfileInfo() {
  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const handleEditClick = () => {
    router.push(`/mypage/edit`);
  };

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profileData = await fetchUserProfile();
        setUserProfile(profileData);
      } catch (error: any) {
        console.error(error.message);
        if (error.message.includes('401') || error.message.includes('404')) {
          router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, [router]);

  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     try {
  //       const profileData = await fetchUserProfile();
  //       setUserProfile(profileData);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getUserProfile();
  // }, []);

  if (loading) return <SkeletonProfile />;
  // if (!userProfile) return <p>프로필 조회 실패</p>;
  if (!userProfile) return <ProfileFetchError />;

  return (
    <>
      <div className="flex flex-col px-24 pt-12 pb-24 gap-18">
        <div className="flex flex-row items-center gap-12">
          <Image
            src={userProfile.profileImg}
            alt="프로필 이미지"
            width={40}
            height={40}
          />

          <p className="text-22 font-medium" onClick={handleEditClick}>
            <span className="text-SemiBlack">{userProfile.nickName}</span>{' '}
            <span className="text-MainColor">&gt;</span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-14 font-normal leading-[140%]">
            <span className="text-MainColor">{userProfile.nickName}</span>님이
            응원하는 팀은{' '}
            <span className="text-MainColor">{userProfile.team}</span>
            입니다.
          </p>
          <p className="text-14 font-normal">
            gugi에서 직관 메이트를 만들어보세요!
          </p>
        </div>
      </div>
    </>
  );
}
