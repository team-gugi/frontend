interface IContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  contact,
}: IContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center bg-SemiWhite rounded-lg px-20 py-16 relative w-[300px]">
        {/* <button
          className="absolute top-12 right-10 text-Gray hover:text-SemiBlack"
          onClick={onClose}
        >
          X
        </button> */}
        <h2 className="text-14 font-noraml mb-10 text-SemiBlack">
          연락처 정보
        </h2>
        <p className="text-14 font-extralight mb-10">
          아래 링크를 통해 모임 방장에게 연락하세요 ✉️
        </p>
        <a
          href={contact}
          target="_blank"
          rel="noopener noreferrer"
          className="font-extralight text-14 text-MainColor underline hover:MainColor mb-10"
        >
          {contact}
        </a>
        <button
          className="mt-4 w-full px-4 py-8 bg-MainColor text-14 text-SemiWhite rounded-md hover:bg-opacity-90"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
