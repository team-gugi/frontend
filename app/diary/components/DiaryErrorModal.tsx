interface IDiaryModalProps {
  // message: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DiaryErrorModal({
  // message,
  onClose,
  onConfirm,
}: IDiaryModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col">
        <div className="flex bg-SemiWhite px-28 py-20 rounded-t-xl items-center justify-center">
          <p className="leading-[160%] text-center text-14 text-SemiBlack font-normal max-w-[178px] overflow-wrap: break-word">
            {/* {message} */}
            로그인 필요한 서비스입니다.
            <br />
            로그인 후 더 자유롭게
            <br />
            구기를 즐겨보세요 (🖐🏻'-' ){' '}
          </p>
        </div>
        <div className="flex items-center justify-around bg-SemiWhite rounded-b-lg border-solid border-t-[0.5px] border-Gray">
          <button
            className="flex w-[9rem] py-10 items-center justify-center font-normal  text-14 text-Red border-solid border-r-[0.5px] border-Gray"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            className="flex w-[9rem] py-10 items-center justify-center font-normal text-14 text-MainColor"
            onClick={onConfirm}
          >
            로그인 하러 가기
          </button>
        </div>
      </div>
    </div>
  );
}
