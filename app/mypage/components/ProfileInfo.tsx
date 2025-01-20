'use client';
import Image from 'next/image';

import Icon from '../../public/icons/Group 960.png';
import { useEffect, useState } from 'react';
import { fetchUserProfile, IUserProfile } from '@/lib/api/fetchUserProfile';
import { useRouter } from 'next/navigation';

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
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!userProfile) return <p>프로필 조회 실패</p>;

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
