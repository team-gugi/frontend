import Image from 'next/image';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

import LocationIcon from '../../public/icons/Location.svg';
import HomeIcon from '../../public/icons/Home_full.svg';
import TriangleIcon from '../../public/icons/Triangle.svg';

export default function StadiumPage() {
  return (
    <>
      <Header />
      <section className="flex flex-col mx-24 pt-10 pb-30 mb-20 gap-6 border-b-1 border-solid border-Gray ">
        <div className="flex flex-row gap-6 items-center">
          <Image
            src={LocationIcon}
            alt="위치 정보 아이콘"
            width={18}
            height={18}
          />
          <span className="font-medium text-14 text-Gray">
            잠실 (서울특별시 송파구 올림픽로 25)
          </span>
        </div>

        <h1 className="font-bold text-28 text-SemiBlack items-center">
          서울종합운동장 야구장
        </h1>

        <div className="flex flex-row gap-6 items-center">
          <Image src={HomeIcon} alt="홈 아이콘" width={14} height={14} />
          <span className="font-light text-12 text-DarkGray items-center">
            두산 베어스, LG 트윈스
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-11 mx-24">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-8 items-center">
            <Image src={TriangleIcon} alt="삼각형" width={24} height={24} />
            <span className="font-semibold text-18 text-MainColor">
              잠실 야구장 Best 6
            </span>
          </div>
          <span className="flex px-10 font-light text-12 text-DarkGray items-center">
            각 구장의 대표 먹거리를 찾아보세요!
          </span>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex justify-center px-20 py-60 border-1 border-solid border-SemiBlack rounded-xl ">
            먹거리 이미지
          </div>

          <div className="flex justify-center px-20 py-60 border-1 border-solid border-SemiBlack rounded-xl ">
            먹거리 이미지
          </div>

          <div className="flex justify-center px-20 py-60 border-1 border-solid border-SemiBlack rounded-xl ">
            먹거리 이미지
          </div>

          <div className="flex justify-center px-20 py-60 border-1 border-solid border-SemiBlack rounded-xl ">
            먹거리 이미지
          </div>
          <div className="flex justify-center px-20 py-60 border-1 border-solid border-SemiBlack rounded-xl ">
            먹거리 이미지
          </div>

          <div className="flex justify-center px-20 py-60 border-1 border-solid border-SemiBlack rounded-xl ">
            먹거리 이미지
          </div>
        </div>

        <div></div>
      </section>

      <Navigation />
    </>
  );
}
