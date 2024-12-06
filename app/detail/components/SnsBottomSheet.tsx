import Link from 'next/link';
import Image from 'next/image';

import InstaFullIcon from '../../public/icons/Insta_full.svg';
import YoutubeFullIcon from '../../public/icons/Youtube_full.svg';

interface ISnsBottomSheetProps {
  onClose: () => void;
}

const SnsBottomSheet = ({ onClose }: ISnsBottomSheetProps) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 방지
    onClose(); // 바텀시트 닫기
  };

  const handleSheetClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 방지로 바텀시트 영역 클릭 시 닫히지 않도록 설정
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-end"
        onClick={handleOverlayClick} // 바텀시트 외부 클릭 시 닫기
      >
        {/* 어둡게 처리된 배경 */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col fixed bottom-0 left-0 w-full px-23 pt-35 pb-40 gap-23 rounded-tl-2xl rounded-tr-2xl bg-White">
          <h2 className="text-20 font-semibold">어디로 이동해볼까요?</h2>

          <div className="flex flex-col gap-10">
            <Link
              href=""
              className="flex flex-row px-28 py-19 gap-10 items-center rounded-lg border-1 border-solid border-DarkGray"
            >
              <Image
                src={InstaFullIcon}
                alt="인스타그램 아이콘"
                width={34}
                height={34}
              />
              <span className="text-18 font-normal text-DarkGray">
                삼성 라이온즈 공식 인스타그램
              </span>
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCMWAku3a3h65QpLm63Jf2pw"
              className="flex flex-row px-28 py-19 gap-10 items-center rounded-lg border-1 border-solid border-DarkGray"
            >
              <Image
                src={YoutubeFullIcon}
                alt="유튜브 아이콘"
                width={34}
                height={34}
              />
              <span className="text-18 font-normal text-DarkGray">
                삼성 라이온즈 공식 유튜브
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnsBottomSheet;
