interface IAccountModalProps {
  type: 'logout' | 'withdraw';
  onClose: () => void;
  onConfirm: () => void;
}
export default function AccountMoadal({
  type,
  onClose,
  onConfirm,
}: IAccountModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col">
        <div className="flex bg-SemiWhite px-28 py-20 rounded-t-xl items-center justify-center">
          <p className="leading-[140%] text-center text-12 text-SemiBlack font-light max-w-[176px] overflow-wrap: break-word">
            {type === 'logout'
              ? '로그아웃 하시겠습니까?'
              : '회원 탈퇴 하시겠습니까?'}
          </p>
        </div>
        <div className="flex items-center justify-around bg-SemiWhite rounded-b-lg border-solid border-t-[0.5px] border-Gray">
          <button
            className="flex px-48 py-10 items-center justify-center font-extralight text-12 text-Red border-solid border-r-[0.5px] border-Gray"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="flex px-48 py-10 items-center justify-center font-extralight text-12 text-MainColor"
            onClick={onConfirm}
          >
            {type === 'logout' ? '로그아웃' : '회원탈퇴'}
          </button>
        </div>
      </div>
    </div>
  );
}
