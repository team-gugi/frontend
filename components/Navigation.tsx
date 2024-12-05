'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MateIcon from '../app/public/icons/Mate.svg';
import DiaryIcon from '../app/public/icons/Diary.svg';
import HomeIcon from '../app/public/icons/Home.svg';
import BallIcon from '../app/public/icons/Ball.svg';
import MypageIcon from '../app/public/icons/Mypage.svg';

/**
 * CHECKLIST
 * [ ] 네비게이션 링크 url 수정
 * [ ] 현재 url에 따라 아이콘 색상 변경
 *
 *
 */

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 w-full px-16 gap-4 bg-White">
      <div className="flex justify-around">
        <Link
          href="/"
          className="flex flex-col items-center justify-cente px-21 py-10 gap-4 "
        >
          <Image
            src={MateIcon}
            alt="직관메이트 아이콘"
            width={20}
            height={18}
          />
          <span className="font-normal text-7 text-Gray">직관메이트</span>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center px-21 py-10 gap-4 "
        >
          <Image src={DiaryIcon} alt="직관일기 아이콘" width={17} height={17} />
          <span className="font-normal text-7 text-Gray">직관일기</span>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center px-21 py-10 gap-4 "
        >
          <Image src={HomeIcon} alt="홈 아이콘" width={18} height={18} />
          <span className="font-normal text-7 text-Gray">홈</span>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center px-21 py-10 gap-4 "
        >
          <Image src={BallIcon} alt="야구정보 아이콘" width={18} height={18} />
          <span className="font-normal text-7 text-Gray">야구 정보</span>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center px-21 py-10 gap-4 "
        >
          <Image src={MypageIcon} alt="홈 아이콘" width={18} height={18} />
          <span className="font-normal text-7 text-Gray">마이페이지</span>
        </Link>
      </div>
    </nav>
  );
}
