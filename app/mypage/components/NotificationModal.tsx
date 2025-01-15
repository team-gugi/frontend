// NotificationModal.tsx
import Image from 'next/image';

interface IApplicantInfo {
  age: number;
  gender: string;
  team: string;
  introduction: string;
  profileImg: string;
}

interface INotificationModalProps {
  notification: {
    requestID: string;
    title: string;
    nickName: string;
    applicantInfo: IApplicantInfo;
  };
  onClose: () => void;
}

export default function NotificationModal({
  notification,
  onClose,
}: INotificationModalProps) {
  const { title, nickName, applicantInfo } = notification;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      <div className="flex flex-col">
        <div
          className="flex flex-col gap-18 max-w-[325px] bg-SemiWhite px-32 py-20 rounded-t-xl"
          onClick={(e) => e.stopPropagation()} // 클릭이 내부로 전달되지 않도록
        >
          {/* 제목, 닉네임, 프로필 이미지 */}
          <div className="flex flex-row">
            <div className="flex flex-row items-center gap-24">
              <Image
                src={applicantInfo.profileImg}
                alt="프로필 이미지"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col gap-5">
                <span className="text-12 font-medium text-SemiBlack">
                  {nickName}
                </span>
                <div className="flex gap-4">
                  <div
                    className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                    style={{ borderRadius: '30px' }}
                  >
                    {applicantInfo.team}
                  </div>
                  <div
                    className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                    style={{ borderRadius: '30px' }}
                  >
                    {applicantInfo.age}세
                  </div>
                  <div
                    className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                    style={{ borderRadius: '30px' }}
                  >
                    {applicantInfo.gender}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 자기소개 */}
          <p className="font-normal text-12 text-SemiBlack leading-[140%] break-words">
            {applicantInfo.introduction}
          </p>

          {/* 매칭 수락 시 연락 수단 공개 안내 */}
          <p className="font-normal text-10 text-Gray text-center">
            매칭 수락시 연락 수단이 공개됩니다.
          </p>
        </div>

        {/* 모달 하단 버튼 */}
        <div className="flex items-center justify-around bg-SemiWhite rounded-b-lg border-solid border-t-[0.5px] border-Gray">
          <button
            className="flex px-62 py-10 items-center justify-center font-normal text-16 text-Red border-solid border-r-[0.5px] border-Gray"
            onClick={onClose} // 거절 버튼은 모달 닫기
          >
            거절
          </button>
          <button className="flex px-62 py-10 items-center justify-center font-normal text-16 text-MainColor">
            수락
          </button>
        </div>
      </div>
    </div>
  );
}
