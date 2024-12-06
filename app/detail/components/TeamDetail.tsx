// components/TeamDetail.tsx
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import InfoIcon from '../../public/icons/Info.svg';
import InstagramIcon from '../../public/icons/Instagram.svg';
import TicketIcon from '../../public/icons/Ticket.svg';
import ShopIcon from '../../public/icons/Shop.svg';
import { useState } from 'react';
import BottomSheet from './SnsBottomSheet';
import SnsBottomSheet from './SnsBottomSheet';

interface TeamDetailProps {
  //   logo: StaticImageData;
  logo: string;
  name: string;
  description: string;
}

const TeamDetail = ({ logo, name, description }: TeamDetailProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <>
      <section className="flex flex-row py-20 mx-24 my-20 gap-10 items-center border-b-1 border-solid border-Gray">
        <Image src={logo} alt={name} width={300} />
        <div className="flex flex-col gap-14 ">
          <h1 className="font-bold text-32 text-[#0066B3]">삼성 라이온즈</h1>
          <p className="font-normal text-14 leading-[140%]">{description}</p>
        </div>
      </section>

      <nav className="flex flex-row px-24 gap-14 justify-between">
        <Link
          href=""
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Image
            src={InfoIcon}
            alt="구장별 상세 정보 아이콘"
            width={24}
            height={24}
          />
          <span className="font-medium text-12 text-SemiBlack">
            메인 홈구장
          </span>
          <span className="font-medium text-12 text-SemiBlack">정보</span>
        </Link>

        <button
          type="button"
          onClick={() => {
            setIsSheetOpen(true);
          }}
          className="flex flex-col gap-4 items-center justify-center "
        >
          <Image
            src={InstagramIcon}
            alt="구단 SNS 아이콘"
            width={24}
            height={24}
          />
          <span className="font-medium text-12 text-SemiBlack">구단 공식</span>
          <span className="font-medium text-12 text-SemiBlack">SNS</span>
        </button>

        <Link
          href=""
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Image
            src={TicketIcon}
            alt="구단별 공식 예매처 바로가기 아이콘"
            width={24}
            height={24}
          />
          <span className="font-medium text-12 text-SemiBlack">
            예매 플랫폼
          </span>
          <span className="font-medium text-12 text-SemiBlack">바로가기</span>
        </Link>

        <Link
          href=""
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Image
            src={ShopIcon}
            alt="구단별 공식 md 스토어 바로가기 아이콘"
            width={24}
            height={24}
          />
          <span className="font-medium text-12 text-SemiBlack">
            공식 MD 스토어
          </span>
          <span className="font-medium text-12 text-SemiBlack">바로가기</span>
        </Link>
      </nav>

      {isSheetOpen && <SnsBottomSheet onClose={() => setIsSheetOpen(false)} />}
    </>
  );
};

export default TeamDetail;
