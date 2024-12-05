import Image from 'next/image';
import Text from '../components/BannerText';

import ArrowIcon from '../../public/icons/Arrow.svg';

export default function Banner() {
  return (
    <div className="py-10 px-24">
      <section className="h-190 rounded-lg mb-14 pt-33 pr-11 pb-11 pl-23 bg-SemiWhite">
        <h2 className="text-24 font-bold text-SemiBlack mb-8">
          야구가 처음이세요?
        </h2>
        <Text text="어렵지 않아요," />
        <Text text="gugi와 함께 시작해봐요!" />
        <div className=" flex flex-row justify-end mt-39 overflow-hidden px-14 py-8 gap-8">
          <p className="text-14 text-semiBlack font-light">야구 룰 배워보기</p>
          <Image
            src={ArrowIcon}
            alt="야구 룰 페이지 바로가기 버튼"
            width={22}
            height={8}
          />
        </div>
      </section>
      {/* <div className="flex justify-center">
        <Image src={carouselBlack} alt="케러셀_선택된 아이콘"></Image>
        <Image src={carouselGray} alt="케러셀_비선택된 아이콘"></Image>
        <Image src={carouselGray} alt="케러셀_비선택된 아이콘"></Image>
      </div> */}
    </div>
  );
}
