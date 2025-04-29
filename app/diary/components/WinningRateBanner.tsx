'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import CharacterIcon from '../../public/icons/직관일기임시캐릭터.png';
import { useRecoilValue } from 'recoil';
import { winRateAtom } from '@/recoil/diary/winRateAtom';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function WinningRateBanner() {
  const winRateData = useRecoilValue(winRateAtom);

  if (!winRateData) {
    return (
      <div className="flex flex-row justify-center gap-24 mx-24 my-20 rounded-xl py-10 border-1 border-solid border-Gray">
        <div className="flex items-center gap-8 justify-center">
          <span className="text-16 font-normal text-SemiBlack">
            승률 정보 로딩중...
          </span>
        </div>
        <Image src={CharacterIcon} alt="승요 캐릭터" width={100} height={100} />
      </div>
    );
  }

  const {
    nickName,
    winRate,
    totalDiaryCount,
    totalWins,
    totalLoses,
    totalDraws,
  } = winRateData;
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
          <p className="font-extralight text-DarkGray  text-14">
            (총 {totalDiaryCount} 경기 중 {totalWins}승 {totalLoses}패{' '}
            {totalDraws}패)
          </p>
        </div>
        <Image src={CharacterIcon} alt="승요 캐릭터" width={100} height={100} />
      </div>
    </>
  );
}
