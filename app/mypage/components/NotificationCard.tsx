import { useState } from 'react';
import NotificationModal from './NotificationModal';

interface IApplicantInfo {
  age: number;
  gender: string;
  team: string;
  introduction: string;
  profileImg: string;
}

interface INotification {
  requestId: string;
  title: string;
  nickName: string;
  applicantInfo: IApplicantInfo;
}

interface INotificationCardProps {
  notification: INotification; // notification prop의 타입을 INotification으로 설정
}

export default function NotificationCard({
  notification,
}: INotificationCardProps) {
  //   const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태 관리

  //   const handleModalToggle = () => {
  //     setIsModalOpen((prev) => !prev); // 모달 토글
  //   };
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태 관리

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev); // 모달 토글
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-between items-center px-24 py-26 gap-8 bg-SemiWhite rounded-xl">
        <p className="max-w-[215px] font-light text-12 text-SemiBlack break-words leading-[140%]">
          <span>"{notification.title}"</span>글에 {notification.nickName}님이
          매칭을 신청하셨습니다.
        </p>

        <button
          onClick={handleModalToggle}
          className="px-10 py-3 border-1 rounded-xl border-MainColor bg-White text-MainColor text-14 font-normal self-center"
        >
          확인
        </button>
      </div>

      {isModalOpen && (
        <NotificationModal
          notification={notification} // notification 객체를 그대로 전달
          onClose={handleModalToggle} // 모달 닫기 함수 전달
        />
      )}
    </div>
  );
}
