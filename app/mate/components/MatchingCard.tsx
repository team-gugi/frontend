'use client';
import { useState } from 'react';
import RequestMatchModal from './RequestMatchModal';
import { applyMatch } from '@/lib/api/applyMatchApi';

interface IMatchingCardProps {
  title: string;
  content: string;
  options: {
    gender: string;
    age: string;
    date: string;
    team: string;
    member: number;
    stadium: string;
  };
  confirmedMembers: number;
  maxMembers: number;
  daysUntilGame: number;
  daysSinceWritten: number;
  mateId: string; // mateId 추가
}

export default function MatchingCard({
  title,
  content,
  options,
  confirmedMembers,
  maxMembers,
  daysUntilGame,
  daysSinceWritten,
  mateId, // mateId 추가
}: IMatchingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  // const optionLabels = [
  //   '상관없음',
  //   '10대',
  //   '08-21',
  //   'KIA',
  //   // '4인',
  //   '광주 기아 챔피언스필드',
  // ];

  const handleMatchRequestClick = () => {
    setSelectedTitle(title); // 모달에 전달할 제목 설정
    setIsModalOpen(true);
  };
  // console.log(isModalOpen);
  // console.log('selected Title : ', selectedTitle);

  // const handleConfirmMatch = () => {
  //   setToastMessage('마이페이지의 알림창에서 매칭 결과를 확인해보세요! ⚾');
  //   setIsModalOpen(false);

  //   setTimeout(() => {
  //     setToastMessage('');
  //   }, 3000);
  // };

  const handleConfirmMatch = async () => {
    try {
      const response = await applyMatch(mateId); // mateId와 함께 API 호출

      if (response.isSuccess) {
        setToastMessage('마이페이지의 알림창에서 매칭 결과를 확인해보세요! ⚾');
      } else {
        setToastMessage(response.message); // 실패 메시지 표시
        // setToastMessage('로그인이 필요한 서비스 입니다. 로그인 후 진행해주세요.'); // 실패 메시지 표시
      }

      setIsModalOpen(false); // 모달 닫기
      setTimeout(() => {
        setToastMessage('');
      }, 3000);
    } catch (error) {
      setToastMessage('매칭 신청에 실패했습니다. 다시 시도해주세요.');
      setIsModalOpen(false);
    }
  };
  return (
    <>
      <div className="relative flex flex-col gap-20 pt-16 border-solid border-t-1 border-LightGray">
        <div className="relative">
          <span className="absolute -top-8 left-24 z-5 px-10 py-3 rounded-[10px] bg-MainColor text-White text-14 font-normal ">
            D-{daysUntilGame}
            {/* {daysUntilGame >= 0
          ? `${daysUntilGame}일 후 경기`
          : `${Math.abs(daysUntilGame)}일 전 경기`} */}
          </span>
          <div className="flex flex-col px-24 py-20 bg-SemiWhite gap-13 rounded-[10px] min-h-234">
            <div className="flex flex-row justify-between">
              <span className="text-14 text-SemiBlack font-medium leading-[140%]">
                {title}
              </span>
              <span className="text-12 text-Gray font-medium min-w-[32px] flex items-center justify-center">
                {daysSinceWritten}일 전
              </span>
            </div>

            <div className="flex text-12 text-Gray font-normal leading-[140%] pb-13 border-solid border-b-[0.5px] border-Gray">
              {content}
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-wrap gap-4">
                {/* {optionLabels.map((label, index) => (
                  <div
                    key={index}
                    className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                    style={{ borderRadius: '30px' }}
                  >
                    {label}
                  </div>
                ))} */}
                {/* {Object.entries(options).map(
                  ([key, value]: [string, string | number], index: number) => (
                    <div
                      key={index}
                      className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                      style={{ borderRadius: '30px' }}
                    >
                      {value}
                    </div>
                  ),
                )} */}

                {Object.entries(options)
                  .filter(([key]) => key !== 'member') // "member"를 제외
                  .map(
                    (
                      [key, value]: [string, string | number],
                      index: number,
                    ) => (
                      <div
                        key={index}
                        className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                        style={{ borderRadius: '30px' }}
                      >
                        {value}
                      </div>
                    ),
                  )}
              </div>
              <div className="flex flex-col items-center justify-center min-w-64 leading-[100%] min-h-38 px-10 py-5 rounded-[10px] border-solid border-1 border-MainColor bg-White">
                <span className="text-11 text-MainColor font-medium">
                  모집인원
                </span>
                <span className="text-11 text-MainColor font-medium">
                  {confirmedMembers}/{maxMembers}
                </span>
              </div>
            </div>
            <button
              className="flex px-85 py-10 items-center justify-center bg-MainColor text-White text-16 font-semibold rounded-xl"
              onClick={handleMatchRequestClick}
            >
              매칭 신청하기
            </button>
          </div>
        </div>
      </div>
      {/* {isModalOpen && (
        <RequestMatchModal closeModal={() => setIsModalOpen(false)} />
      )} */}
      {isModalOpen && (
        <RequestMatchModal
          closeModal={() => setIsModalOpen(false)}
          onConfirm={handleConfirmMatch}
          title={selectedTitle} // 선택한 제목 전달
        />
      )}

      {toastMessage && (
        <div className="px-14 py-7 min-w-[327px] fixed left-1/2 bottom-70 transform -translate-x-1/2 w-auto bg-Toast text-White rounded-lg shadow-md text-13 font-extralight transition-opacity duration-300 opacity-100 z-20">
          {toastMessage}
        </div>
      )}
    </>
  );
}
