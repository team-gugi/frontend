'use client';
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
import SamsungIcon from '../../public/icons/logo_samsung.svg';

interface ITeamDetailProps {
  //   logo: StaticImageData;
  logo: string;
  name: string;
  description: string;
  instagram: string;
  youtube: string;
  ticketShop: string;
  mdShop: string;
}

const TeamDetail = ({
  logo,
  name,
  description,
  instagram,
  youtube,
  ticketShop,
  mdShop,
}: ITeamDetailProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <>
      <section className="flex flex-row py-20 mx-24 my-20 gap-10 items-center border-b-1 border-solid border-Gray">
        <Image src={SamsungIcon} alt={name} width={300} height={300} />
        <div className="flex flex-col gap-14">
          <h1 className="font-bold text-32 text-[#0066B3]">{name}</h1>
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
        </Link>

        <button
          type="button"
          onClick={() => {
            setIsSheetOpen(true);
          }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Image
            src={InstagramIcon}
            alt="구단 SNS 아이콘"
            width={24}
            height={24}
          />
          <span className="font-medium text-12 text-SemiBlack">
            구단 공식 SNS
          </span>
        </button>

        <Link
          href={ticketShop}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Image
            src={TicketIcon}
            alt="구단 예매 플랫폼"
            width={24}
            height={24}
          />
          <span className="font-medium text-12 text-SemiBlack">
            예매 플랫폼
          </span>
        </Link>

        <Link
          href={mdShop}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Image src={ShopIcon} alt="구단 MD 스토어" width={24} height={24} />
          <span className="font-medium text-12 text-SemiBlack">
            공식 MD 스토어
          </span>
        </Link>
      </nav>

      {isSheetOpen && (
        <SnsBottomSheet
          onClose={() => setIsSheetOpen(false)}
          teamName={name}
          instagramLink={instagram}
          youtubeLink={youtube}
        />
      )}
    </>
  );
};
export default TeamDetail;
