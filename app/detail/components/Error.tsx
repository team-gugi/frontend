'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import HomeIcon from '../../public/icons/Home_active.svg';
import RefreshIcon from '../../public/icons/Refresh.svg';

export default function Error({ errorMessage }: { errorMessage: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-8">
      <h1 className="text-18 font-semibold text-Red">{errorMessage}</h1>
      <p className="text-SemiBlack mt-4 leading-[140%]">
        잠시 후 다시 시도해주세요. <br />
        문제가 지속되면 관리자에게 문의해주세요.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {/* <button
          onClick={() => router.refresh()} // 현재 페이지 새로고침
          className="flex flex-row items-center justify-center gap-12 px-24 py-12 text-SemiBlack rounded-md shadow hover:bg-BlockColor"
        >
          <Image
            src={RefreshIcon}
            alt="새로고침 아이콘"
            width={28}
            height={28}
          />
          <span>다시 시도하기</span>
        </button> */}
        <button
          onClick={() => router.push('/home')}
          className="flex flex-row items-center justify-center gap-12 px-24 py-12 text-SemiBlack rounded-md shadow hover:bg-SemiWhite"
        >
          <Image src={HomeIcon} alt="홈 아이콘" width={24} height={24} />

          <span>홈으로 돌아가기</span>
        </button>
      </div>
    </div>
  );
}
