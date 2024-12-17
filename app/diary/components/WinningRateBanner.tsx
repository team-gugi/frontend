'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import CharacterIcon from '../../public/icons/직관일기임시캐릭터.png';
import { useRecoilValue } from 'recoil';
import { winRateAtom } from '@/recoil/diary/winRateAtom';

export default function WinningRateBanner() {
  const winRateData = useRecoilValue(winRateAtom);

  if (!winRateData) {
    return <p>승률 데이터 로딩 중...</p>;
  }
  const { nickName, winRate, totalDiaryCount, totalWins } = winRateData;
  const formattedWinRate = Math.floor(parseFloat(winRate));

  return (
    <>
      <div className="flex flex-row justify-center gap-24 mx-24 my-20 rounded-xl py-10 border-1 border-solid border-Gray">
        <div className="flex flex-col items-end gap-8 justify-center">
          <p className="font-normal text-Maincolor text-right leading-normal">
            <span className="font-semibold text-MainColor text-18">
              {nickName}
            </span>{' '}
            의 직관 승률은
            <br />
            <span className="font-semibold text-MainColor text-18">
              {formattedWinRate}%
            </span>{' '}
            입니다.
          </p>
          <p className="font-extralight text-Gray text-12">
            (총 {totalDiaryCount} 경기 중 {totalWins}회 승리)
          </p>
        </div>
        <Image src={CharacterIcon} alt="승요 캐릭터" width={100} height={100} />
      </div>
    </>
  );
}
