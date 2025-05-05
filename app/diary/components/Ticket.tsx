import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { diaryDetailsAtom } from '@/recoil/diary/diaryDetailsAtom';
import { useRouter } from 'next/navigation';
import EditIcon from '../../public/icons/Edit.svg';
export interface ITicketProps {
  diaryId: string;
  gameDate: string;
  gameStadium: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  gameImg: string;
  content: string;
  // gameResult: string;
  gameResult: 'WIN' | 'LOSE' | 'DRAW';
}
export default function Ticket({
  diaryId,
  gameDate,
  gameStadium,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  gameImg,
  content,
  gameResult,
}: ITicketProps) {
  // export default function Ticket() {
  // const diaryDetails = useRecoilValue(diaryDetailsAtom); // 여러 일기를 저장한 배열

  const router = useRouter();

  const handleEditClick = (diaryId: string) => {
    if (diaryId) {
      router.push(`/diary/edit/${diaryId}`);
    }
  };

  // if (!diaryDetails || diaryDetails.length === 0) {
  //   return <div>로딩 중...</div>;
  // }

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <Image
            src={gameImg}
            width={375}
            height={375}
            alt="일기 이미지"
            className="w-full h-[375px] object-cover"
          />
        </div>

        {/* Diary Content Container */}
        <div className="flex flex-col fixed min-h-[400px] bottom-0 left-0 w-full px-34 pt-20 pb-40 gap-12 rounded-tl-3xl rounded-tr-3xl bg-SemiWhite">
          {/* Date & Edit button */}
          <div className="flex justify-between items-center">
            <span className="text-SemiBlack font-semibold text-20">
              {gameDate}
            </span>
            <button
              className="flex justify-end"
              onClick={() => handleEditClick(diaryId)}
            >
              <Image
                src={EditIcon}
                alt="일기 수정 버튼"
                width={24}
                height={23}
              />
            </button>
          </div>

          {/* Game Result & Stadium */}
          <div className="flex flex-col">
            {/* Result */}
            <div className="flex flex-row gap-33 py-10 items-center border-t-1 border-solid border-Gray">
              <span className="font-serif font-normal text-12 text-DarkGray">
                Result
              </span>
              <p className="flex gap-10 items-center">
                <span className="text-12 font-semibold text-SemiBlack">
                  {homeTeam}
                </span>
                <span className="text-20 font-bold text-MainColor">
                  {homeScore}
                </span>
              </p>
              <p className="flex gap-10 items-center">
                <span className="text-12 font-semibold text-SemiBlack">
                  {awayTeam}
                </span>
                <span className="text-20 font-bold text-MainColor">
                  {awayScore}
                </span>
              </p>
            </div>

            {/* Stadium */}
            <div className="flex flex-row gap-22 py-10 items-center border-t-1 border-b-1 border-solid border-Gray">
              <span className="font-serif font-normal text-12 text-DarkGray">
                Stadium
              </span>
              <p className="text-12 font-semibold text-SemiBlack">
                {gameStadium}
              </p>
            </div>
          </div>
          <p className="text-17 font-normal text-SemiBlack leading-[150%] break-words">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}
