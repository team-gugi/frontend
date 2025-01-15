import { useState } from 'react';

import Image from 'next/image';

import Icon from '../../public/icons/Group 960.png';

interface IMatchingCardListProps {
  activeTab: string;
  notifications: string[];
  pending: string[];
  // accepted: string[];
  // rejected: string[];
}

export default function MatchingCardList({
  activeTab,
  // notifications = [], // 기본값을 빈 배열로 설정
  // pending = [],
  notifications,
  pending,
  // accepted,
  // rejected,
}: IMatchingCardListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const options = ['여자만', '10대', '8/21', '두산', '4인', '잠실야구장'];
  // const optionLabels = [
  //   '상관없음',
  //   '10대',
  //   '08-21',
  //   'KIA',
  //   // '4인',
  //   '광주 기아 챔피언스필드',
  // ];

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const renderContent = () => {
    switch (activeTab) {
      case '알림함':
        return notifications.length === 0 ? (
          <div className="flex flex-col px-24 py-26 gap-8 bg-SemiWhite rounded-xl">
            <p className="font-light text-12 text-SemiBlack">
              대기 중인 매칭이 없습니다.
            </p>
            <p className="font-light text-12 text-SemiBlack">
              혼자보단 같이! 직관 친구들을 찾아 떠나볼까요? (🖐🏻'-' ){' '}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-20">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="flex justify-between px-24 py-26 gap-8 bg-SemiWhite rounded-xl"
              >
                <p className="max-w-[215px] font-light text-12 text-SemiBlack break-words">
                  <span>"{notification}"</span>글에 닉네임님이 매칭을
                  신청하셨습니다.
                </p>

                <button
                  onClick={handleModalToggle}
                  className="px-10 py-3 border-1 rounded-xl border-MainColor bg-White text-MainColor text-14 font-normal"
                >
                  확인
                </button>
              </div>
            ))}
          </div>
        );
      case '매칭대기':
        return pending.length === 0 ? (
          <div className="flex flex-col px-24 py-26 gap-8 bg-SemiWhite rounded-xl">
            <p className="font-light text-12 text-SemiBlack">
              대기 중인 매칭이 없습니다.
            </p>
            <p className="font-light text-12 text-SemiBlack">
              혼자보단 같이! 직관 친구들을 찾아 떠나볼까요? (🖐🏻'-' ){' '}
            </p>
          </div>
        ) : (
          <div className="relative flex flex-col gap-20 pt-16">
            <div className="relative">
              <span className="absolute -top-8 left-24 z-10 px-10 py-3 rounded-[10px] bg-MainColor text-White text-14 font-normal ">
                방장
              </span>
              <div className="flex flex-col px-24 py-20 bg-SemiWhite gap-13 rounded-[10px] min-h-234">
                <div className="flex flex-row justify-between">
                  <span className="text-14 text-SemiBlack font-medium">
                    같이 직관 갈 두산 베어스 팬들 구합니다!
                  </span>
                  <span className="text-12 text-Gray font-medium">D - 4</span>
                </div>

                <div className="flex text-12 text-Gray font-normal leading-[140%] pb-13 border-solid border-b-[0.5px] border-Gray">
                  먹는 거 좋아해요. 많이 먹고 싶어요! mbti E인 분들 환영합니다
                  🐻
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-wrap gap-4">
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
                      2/4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case '매칭성사':

      case '매칭거절':

      default:
        return (
          <p className="font-normal  text-18 text-MainColor text-center">
            매칭 내역이 없습니다.
          </p>
        );
    }
  };

  return (
    <div className="p-4">
      {renderContent()}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={handleModalToggle} // 배경 클릭 시 모달 닫기
        >
          <div className="flex flex-col">
            <div
              className="flex flex-col gap-18 max-w-[325px] bg-SemiWhite px-32 py-20 rounded-t-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-24">
                  <Image
                    src={Icon}
                    alt="프로필 이미지"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col gap-5">
                    <span className="text-12 font-medium text-SemiBlack">
                      최야구님
                    </span>
                    <div className="flex gap-4">
                      <div
                        className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                        style={{ borderRadius: '30px' }}
                      >
                        두산
                      </div>
                      <div
                        className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                        style={{ borderRadius: '30px' }}
                      >
                        17세
                      </div>
                      <div
                        className="px-14 py-4 border-solid border-1 border-BlockColor bg-White text-SemiBlack text-12 font-medium whitespace-nowrap"
                        style={{ borderRadius: '30px' }}
                      >
                        여자
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-normal text-12 text-SemiBlack leading-[140%] break-words">
                야구의 매력에 빠진 초보 팬입니다! 아직은 룰도 다 알지 못하지만,
                응원하는 재미를 조금씩 알아가고 있어요. 함께 직관 가실 분
                환영해요! 🐻
              </p>

              <p className="font-normal text-10 text-Gray text-center">
                매칭 수락시 연락 수단이 공개 됩니다.
              </p>
            </div>
            <div className="flex items-center justify-around bg-SemiWhite rounded-b-lg border-solid border-t-[0.5px] border-Gray">
              <button
                className="flex px-62 py-10 items-center justify-center font-normal text-16 text-Red border-solid border-r-[0.5px] border-Gray"
                onClick={handleModalToggle}
              >
                거절
              </button>
              <button className="flex px-62 py-10 items-center justify-center font-normal text-16 text-MainColor">
                수락
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
