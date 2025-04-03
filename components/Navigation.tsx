'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import MateIcon from '../app/public/icons/Mate.svg';
import DiaryIcon from '../app/public/icons/Diary.svg';
import HomeIcon from '../app/public/icons/Home.svg';
import BallIcon from '../app/public/icons/Ball.svg';
import MypageIcon from '../app/public/icons/Mypage.svg';

import MateIcon_Active from '../app/public/icons/Mate_active.svg';
import DiaryIcon_Active from '../app/public/icons/Diary_active.svg';
import HomeIcon_Active from '../app/public/icons/Home_active.svg';
import BallIcon_Active from '../app/public/icons/Ball_active.svg';
import MypageIcon_Active from '../app/public/icons/Mypage_active.svg';
``;
export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-White"
      style={{
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="flex">
        <Link
          href="/mate"
          className="flex flex-col items-center justify-center w-[20%] py-10 gap-6 "
        >
          <Image
            src={isActive('/mate') ? MateIcon_Active : MateIcon}
            alt="직관메이트 아이콘"
            width={20}
            height={20}
          />
          <span
            className={`font-normal text-10 ${isActive('/mate') ? 'text-SemiBlack' : 'text-Gray'}`}
          >
            직관메이트
          </span>
        </Link>

        <Link
          href="/diary"
          className="flex flex-col items-center justify-center  w-[20%] py-10 gap-6 "
        >
          <Image
            src={isActive('/diary') ? DiaryIcon_Active : DiaryIcon}
            alt="직관일기 아이콘"
            width={20}
            height={18}
          />
          <span
            className={`font-normal text-10 ${isActive('/diary') ? 'text-SemiBlack' : 'text-Gray'}`}
          >
            직관일기
          </span>
        </Link>

        <Link
          href="/home"
          className="flex flex-col items-center justify-center   w-[20%] py-10 gap-6 "
        >
          <Image
            src={isActive('/home') ? HomeIcon_Active : HomeIcon}
            alt="홈 아이콘"
            width={20}
            height={20}
          />
          <span
            className={`font-normal text-10 ${isActive('/home') ? 'text-SemiBlack' : 'text-Gray'}`}
          >
            홈
          </span>
        </Link>

        <Link
          href="/chatbot"
          className="flex flex-col items-center justify-center    w-[20%] py-10 gap-6 "
        >
          <Image
            src={isActive('/chatbot') ? BallIcon_Active : BallIcon}
            alt="야구공 아이콘"
            width={20}
            height={20}
          />
          <span
            className={`font-normal text-10 ${isActive('/chatbot') ? 'text-SemiBlack' : 'text-Gray'}`}
          >
            AI 챗봇
          </span>
        </Link>

        <Link
          href="/mypage"
          className="flex flex-col items-center justify-center  w-[20%] py-10 gap-6 "
        >
          <Image
            src={isActive('/mypage') ? MypageIcon_Active : MypageIcon}
            alt="마이페이지 아이콘"
            width={20}
            height={20}
          />
          <span
            className={`font-normal text-10 ${isActive('/mypage') ? 'text-SemiBlack' : 'text-Gray'}`}
          >
            마이페이지
          </span>
        </Link>
      </div>
    </nav>
  );
}
