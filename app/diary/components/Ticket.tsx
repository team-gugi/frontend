import Image from 'next/image';

import EditIcon from '../../public/icons/Edit.svg';
import WinStamp from '../../public/icons/win_temp.svg';
import { useRecoilValue } from 'recoil';
import { diaryDetailsAtom } from '@/recoil/diary/diaryDetailsAtom';

export default function Ticket() {
  const diaryDetails = useRecoilValue(diaryDetailsAtom);

  if (!diaryDetails) {
    return <div>로딩 중...</div>;
  }
  return (
    <>
      <div className="flex flex-col mx-36 my-20 px-20 py-20 gap-15 bg-SemiWhite ">
        <button className="flex justify-end">
          <Image src={EditIcon} alt="일기 수정 버튼" width={24} height={23} />
        </button>
        <div className="flex flex-col gap-26">
          <div className="bg-White width-[260px]">
            <Image
              src={diaryDetails.gameImg}
              alt="직관 일기 이미지"
              width={260}
              height={260}
            />
          </div>
          <p className="text-17 font-normal text-SemiBlack leading-[130%]">
            {diaryDetails.content}
          </p>
        </div>
        <div className="flex flex-row justify-between mt-10 pt-20 border-t-1 border-dashed border-SemiBlack ">
          <div className="flex flex-col gap-10 ">
            <span className="text-24 text-SemiBlack font-normal">
              {diaryDetails.gameDate}
            </span>
            <span className="text-24 text-SemiBlack font-semibold">
              {diaryDetails.homeTeam} vs {diaryDetails.awayTeam}
            </span>
            <span className="text-16 text-MainColor font-normal">
              {diaryDetails.homeScore}:{diaryDetails.awayScore} (
              {diaryDetails.gameResult})
            </span>
            <span className="text-18 text-SemiBlack font-normal">
              {diaryDetails.gameStadium}
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
