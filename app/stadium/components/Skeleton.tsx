'use client';

import Image from 'next/image';
import LocationIcon from '../../public/icons/Location.svg';
import LocationWhiteIcon from '../../public/icons/Locaation_white.svg';
import HomeIcon from '../../public/icons/Home_full.svg';
import TriangleIcon from '../../public/icons/Triangle.svg';

export default function StadiumSkeleton() {
  return (
    <>
      <section className="flex flex-col mx-24 pt-10 pb-30 mb-20 gap-8 border-b-1 border-solid border-Gray">
        <div className="flex flex-row gap-6 pl-3 items-center">
          <Image
            src={LocationIcon}
            alt="위치 정보 아이콘"
            width={18}
            height={18}
          />
          <span className="w-200 h-18 bg-LightGray rounded animate-pulse"></span>
        </div>

        <div className="w-210 h-30 bg-LightGray rounded animate-pulse"></div>

        <div className="flex flex-row gap-6 items-center pl-4">
          <Image src={HomeIcon} alt="홈 아이콘" width={16} height={16} />
          <span className="w-100 h-16 bg-LightGray rounded animate-pulse"></span>
        </div>
      </section>

      <section className="flex flex-col gap-11 mx-24 h-full overflow-y-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-8 items-center">
            <Image src={TriangleIcon} alt="삼각형" width={24} height={24} />
            <span className="w-100 h-16 bg-LightGray rounded animate-pulse"></span>
          </div>
          <span className="w-full h-24 bg-LightGray rounded animate-pulse px-10"></span>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-160 h-160 bg-LightGray rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    </>
  );
}
