import { useRouter } from 'next/navigation';
interface IMatchStatusCardProps {
  notification: {
    isOwner: boolean;
    mateId: string;
    title: string;
    content: string;
    contact: string;
    daysSinceWritten: number;
    daysUntilGame: number;

    confirmedMembers: number;
    options: {
      gender: string;
      age: string;
      date: string;
      team: string;
      member: number;
      stadium: string;
    };
  };
}

export default function MatchStatusCard({
  notification,
}: IMatchStatusCardProps) {
  const router = useRouter();

  // const handleMatePostEdit = () => {
  //   router.push(`/mate/edit/${notification.mateId}`);
  // };
  const handleMatePostEdit = () => {
    const params = new URLSearchParams({
      title: notification.title,
      content: notification.content,
      gender: notification.options.gender,
      age: notification.options.age,
      date: notification.options.date,
      team: notification.options.team,
      member: notification.options.member.toString(),
      stadium: notification.options.stadium,
      contact: notification.contact,
    });
    router.push(`/mate/edit/${notification.mateId}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-col gap-20 pt-16">
      <div className="relative">
        {/* <span className="absolute -top-8 left-24 z-10 px-10 py-3 rounded-[10px] bg-MainColor text-White text-14 font-normal ">
          {notification.isOwner ? '방장' : '참여자'}
        </span> */}
        <span
          className={`absolute -top-8 left-24 z-10 px-10 py-3 rounded-[10px] text-White text-14 font-normal ${
            notification.isOwner ? 'bg-MainColor' : 'bg-Gray'
          }`}
        >
          {notification.isOwner ? '방장' : '참여자'}
        </span>
        <div className="flex flex-col px-24 py-20 bg-SemiWhite gap-13 rounded-[10px] min-h-234">
          <div className="flex flex-row justify-between">
            <span className="text-14 text-SemiBlack font-medium">
              {notification.title}
            </span>
            <span className="text-12 text-Gray font-medium">
              D-{notification.daysUntilGame}
            </span>
          </div>

          <div className="flex text-12 text-Gray font-normal leading-[140%] pb-13 border-solid border-b-[0.5px] border-Gray">
            {notification.content}
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4">
              {Object.entries(notification.options)
                .filter(([key]) => key !== 'member') // "member"를 제외
                .map(
                  ([key, value]: [string, string | number], index: number) => (
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
                {notification.confirmedMembers}/{notification.options.member}
              </span>
            </div>
          </div>
          {/* 방장일 때만 버튼 표시 */}
          {notification.isOwner && (
            <div className="mt-10">
              <button
                className="flex px-85 py-10 items-center justify-center bg-MainColor text-White text-16 font-medium rounded-xl"
                onClick={handleMatePostEdit}
              >
                게시물 수정하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
