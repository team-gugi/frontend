'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ArrowIcon from '../public/icons/Arrow.svg';

export default function OnboardingPage() {
  return (
    <>
      <div className="flex flex-col items-center px-40 mt-[248px]">
        <p className="relative self-stretch font-semibold text-82 animate-slideIn">
          <span className="text-SemiBlack tracking-[-2.69px]">야</span>
          <span className="text-MainColor tracking-[-2.69px]">구</span>
          <span className="text-SemiBlack tracking-[-2.69px]">,</span>
        </p>
        <div className="relative self-stretch font-semibold text-82 tracking-[-3.28px] leading-[98.4px] animate-slideIn delay-100">
          처음
        </div>
        <div className="relative self-stretch font-semibold text-82 tracking-[-3.28px] leading-[98.4px] animate-slideIn delay-200">
          이세요?
        </div>
      </div>

      <Link
        href="/home"
        className="flex px-24 py-8 gap-8 items-center justify-end mt-63 animate-slideIn delay-300 "
      >
        <span className="text-SemiBlack text-18 font-light">
          gugi와 함께 야잘알 데뷔하기
        </span>
        <Image
          src={ArrowIcon}
          alt="홈화면 이동 화살표 아이콘"
          width={24}
          height={8}
        />
      </Link>
    </>
  );
}
