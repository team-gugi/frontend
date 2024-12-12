import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import samsung from '../../public/icons/logo_samsung.svg';
import lg from '../../public/icons/logo_lg.svg';
import lotte from '../../public/icons/logo_lotte.svg';
import SSG from '../../public/icons/logo_SSG.svg';
import kt from '../../public/icons/logo_kt.svg';
import kiwoom from '../../public/icons/logo_kiwoom.svg';
import doosan from '../../public/icons/logo_doosan.svg';
import kia from '../../public/icons/logo_kia.svg';
import nc from '../../public/icons/logo_nc.svg';
import hanhwa from '../../public/icons/logo_hanhwa.svg';

interface TeamButtonProps {
  team: {
    id: string;
    name: string;
    logo: string;
  };
}

const teamLogos: { [key: string]: StaticImageData } = {
  samsung,
  lg,
  lotte,
  SSG,
  kt,
  kiwoom,
  doosan,
  kia,
  nc,
  hanhwa,
};

export default function TeamButton({ team }: TeamButtonProps) {
  return (
    <Link href={`/detail/${team.id}`}>
      <div className="flex flex-col items-center py-10 cursor-pointer gap-18 bg-SemiWhite rounded-lg">
        <Image
          src={teamLogos[team.id]}
          // src={team.logo}
          alt={team.name}
          width={50}
          height={50}
        />
        <span className="text-14 font-normal">{team.name}</span>
      </div>
    </Link>
  );
}
