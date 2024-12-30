import Image from 'next/image';
import ReturnIcon from '../../public/icons/Return.svg';

interface IBottomButtonsProps {
  onReset: () => void;
  onApply: () => void;
}

export default function BottomButtons({
  onReset,
  onApply,
}: IBottomButtonsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 pb-28">
      <div className="flex gap-18 justify-center">
        <button
          onClick={onReset}
          className="flex px-24 py-17 gap-10 bg-SemiWhite rounded-lg"
        >
          <Image src={ReturnIcon} alt="초기화 버튼" width={14} height={14} />
          <span className="font-normal text-14 text-Gray">초기화</span>
        </button>
        <button
          onClick={onApply}
          className="flex px-52 py-17 bg-SemiBlack text-White rounded-lg font-normal text-14"
        >
          조건 적용하기
        </button>
      </div>
    </div>
  );
}
