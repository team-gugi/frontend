'use client';
interface IRequestMatchModalProps {
  closeModal: () => void;
  onConfirm: () => void;
}

export default function RequestMatchModal({
  closeModal,
  onConfirm,
}: IRequestMatchModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col">
        <div className="flex bg-SemiWhite px-28 py-20 rounded-t-xl">
          <p className="leading-[140%] text-center text-12 text-SemiBlack font-light max-w-[176px] overflow-wrap: break-word">
            “같이 야놀하실 분들 찾습니다 같이 야놀하실 분들 찾습니다" 글에
            매칭을 신청하시겠습니까?
          </p>
        </div>
        <div className="flex items-center justify-around bg-SemiWhite rounded-b-lg border-solid border-t-[0.5px] border-Gray">
          <button
            className="flex px-48 py-10 items-center justify-center font-extralight text-12 text-Red border-solid border-r-[0.5px] border-Gray"
            onClick={closeModal}
          >
            닫기
          </button>
          <button
            className="flex px-48 py-10 items-center justify-center font-extralight text-12 text-MainColor"
            onClick={onConfirm}
          >
            신청
          </button>
        </div>
      </div>
    </div>
  );
}
