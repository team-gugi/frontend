'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WinStampIcon from '../../public/icons/win_temp.svg';
import LocationBlackIcon from '../../public/icons/Location_black.svg';
import { useRecoilValue } from 'recoil';
import { diaryAtom, DiaryEntry } from '@/recoil/diary/diaryAtom';

export default function ListView() {
  const diaries = useRecoilValue(diaryAtom);
  return (
    <>
      <div className="flex flex-col px-30 py-10 gap-18">
        {diaries.map((diary: DiaryEntry, index) => (
          <Link key={index} href={`/diary/${diary.diaryId}`} passHref>
            <div
              key={index}
              className="flex px-10 tems-center justify-between bg-SemiWhite rounded-lg "
            >
              <div className="flex flex-col my-18 gap-8">
                <p className="text-16 font-normal text-SemiBlack">
                  {diary.gameDate}
                </p>
                <p className="text-16 font-semibold text-SemiBlack">
                  {diary.homeTeam} vs {diary.awayTeam}
                </p>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={LocationBlackIcon}
                    alt="위치 아이콘"
                    width={12}
                    height={12}
                  />
                  <p className="text-12 font-normal text-SemiBlack">
                    {diary.gameStadium}
                  </p>
                </div>
              </div>
              <div className="flex items-center px-10 border-l-1 border-dashed border-Gray">
                <Image
                  src={WinStampIcon}
                  alt="승리 스탬프"
                  width={60}
                  height={60}
                  className={`${diary.gameResult === 'WIN' ? '' : 'hidden'}`}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
