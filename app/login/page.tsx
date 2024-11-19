'use client';
import React from 'react';
import Image from 'next/image';

import kakakIcon from '../public/icons/Kakao.svg';
export default function LoginPage() {
  /**
   * TODO
   * 카카오 간편 로그인 연동 기능 추가
   *
   * CHECKLIST
   * [ ] 카카오 간편 로그인 연동
   *
   */

  return (
    <>
      <div className="flex flex-col items-center px-40 mt-[248px]">
        <p className="relative self-stretch font-semibold text-82">
          <span className="text-SemiBlack tracking-[-2.69px]">야</span>
          <span className="text-MainColor tracking-[-2.69px]">구</span>
          <span className="text-SemiBlack tracking-[-2.69px]">,</span>
        </p>
        <div className="relative self-stretch font-semibold text-82 tracking-[-3.28px] leading-[98.4px]">
          처음
        </div>
        <div className="relative self-stretch font-semibold text-82 tracking-[-3.28px] leading-[98.4px]">
          이세요?
        </div>
      </div>

      <div className="flex px-40 py-10 items-center mt-63">
        <button className="flex flex-row w-full px-20 items-center justify-center py-20 gap-8 bg-[#FEE500] rounded-lg">
          <Image
            src={kakakIcon}
            alt="카카오 간편 로그인 아이콘"
            width={18}
            height={18}
          />
          <span className="font-normal text-SemiBlack text-16">
            카카오 로그인
          </span>
        </button>
      </div>
    </>
  );
}
