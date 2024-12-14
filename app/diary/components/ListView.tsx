'use client';
import React from 'react';
import Image from 'next/image';
import WinStampIcon from '../../public/icons/win_temp.svg';
import LocationBlackIcon from '../../public/icons/Location_black.svg';
interface IDiaryItem {
  date: string;
  match: string;
  location: string;
  result: 'WIN' | 'LOSE';
}

const diaryList: IDiaryItem[] = [
  {
    date: '2024.07.10',
    match: '삼성 vs 롯데',
    location: '대구 삼성 라이온즈 파크',
    result: 'WIN',
  },
  {
    date: '2024.07.11',
    match: '두산 vs 기아',
    location: '서울 잠실 야구장',
    result: 'WIN',
  },
  {
    date: '2024.07.12',
    match: 'LG vs 한화',
    location: '서울 고척 스카이돔',
    result: 'WIN',
  },
  {
    date: '2024.07.13',
    match: '키움 vs 한화',
    location: '서울 고척 스카이돔',
    result: 'LOSE',
  },
];

export default function ListView() {
  return (
    <>
      <div className="flex flex-col px-30 py-10 gap-18">
        {diaryList.map((diary, index) => (
          <div
            key={index}
            className="flex px-10 tems-center justify-between bg-SemiWhite rounded-lg gap-84"
          >
            <div className="flex flex-col my-18 gap-8">
              <p className="text-16 font-normal text-SemiBlack">{diary.date}</p>
              <p className="text-16 font-semibold text-SemiBlack">
                {diary.match}
              </p>
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={LocationBlackIcon}
                  alt="위치 아이콘"
                  width={12}
                  height={12}
                />
                <p className="text-12 font-normal text-SemiBlack">
                  {diary.location}
                </p>
              </div>
            </div>
            <div className="flex items-center px-10 border-l-1 border-dashed border-Gray">
              <Image
                src={WinStampIcon}
                alt="승리 스탬프"
                width={60}
                height={60}
                className={`${diary.result === 'WIN' ? '' : 'hidden'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
