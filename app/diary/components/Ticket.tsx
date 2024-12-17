import Image from 'next/image';

import EditIcon from '../../public/icons/Edit.svg';
import WinStamp from '../../public/icons/win_temp.svg';

export default function Ticket() {
  return (
    <>
      <div className="flex flex-col mx-36 my-20 px-20 py-20 gap-15 bg-SemiWhite ">
        <button className="flex justify-end">
          <Image src={EditIcon} alt="일기 수정 버튼" width={24} height={23} />
        </button>
        <div className="flex flex-col gap-26">
          <div className="bg-White width-[260px] py-130">
            일기 이미지 들어갈 부분 추후 이미지 태그로 수정
          </div>
          <p className="text-17 font-normal text-SemiBlack leading-[130%]">
            일기내용llfklkajflkajlfkjal dlfkdjlfkjaldkjflakdjflakjfkla
            adlkfjalkdfjlakjflakjflakflalfkdlfkdlfkj
            dlfkjalfjlajdflkajdflkajdlfkajdlfkjaldfl
          </p>
        </div>
        <div className="flex flex-row justify-between mt-10 pt-20 border-t-1 border-dashed border-SemiBlack ">
          <div className="flex flex-col gap-10 ">
            <span className="text-24 text-SemiBlack font-normal">
              2024.07.10
            </span>
            <span className="text-24 text-SemiBlack font-semibold">
              응원팀 vs 상대팀
            </span>
            <span className="text-16 text-MainColor font-normal">
              경기 결과 7:4 (승)
            </span>
            <span className="text-18 text-SemiBlack font-normal">
              직관한 구장 이름
            </span>
          </div>
          <Image
            src={WinStamp}
            alt="승리 스탬프"
            width={78}
            height={78}
            className="flex items-end"
          />
        </div>
      </div>
    </>
  );
}
