// import Image from 'next/image';

// import EditIcon from '../../public/icons/Edit.svg';
// import WinStamp from '../../public/icons/win_temp.svg';
// import TempImg from '../../public/icons/잠실2.png';
// import { useRecoilValue } from 'recoil';
// import { diaryDetailsAtom } from '@/recoil/diary/diaryDetailsAtom';
// import { useRouter } from 'next/navigation';

// export default function Ticket() {
//   // 목업 데이터 추가
//   // const diaryDetails = {
//   //   diaryId: '1',
//   //   gameImg: '/app/public/icons/잠실2.png', // 실제 이미지 URL로 교체 필요
//   //   content:
//   //     '일기내용llfklkajflkajlfalkdjflkadjlfkajdlkfjalkdfjlakdfjlakalkdjflakdjflkajdlfkajdslkfjadlkfjasldkfjalsdkfjalsdkfjladskfjlasdkfjladskfjladkfjalksj',
//   //   gameDate: '2024-02-24',
//   //   homeTeam: '롯데 자이언츠',
//   //   awayTeam: '두산 베어스',
//   //   homeScore: 6,
//   //   awayScore: 3,
//   //   gameResult: 'WIN',
//   //   gameStadium: '부산 사직 야구장',
//   // };
//   const diaryDetails = useRecoilValue(diaryDetailsAtom);

//   const router = useRouter();
//   const diaryId = diaryDetails?.diaryId;
//   const handleEditClick = () => {
//     if (diaryId) {
//       router.push(`/diary/edit/${diaryId}`);
//     }
//   };

//   if (!diaryDetails) {
//     return <div>로딩 중...</div>;
//   }
//   return (
//     <>
//       <div>
//         <div className="flex items-center justify-center">
//           <Image
//             src={diaryDetails.gameImg}
//             width={375}
//             height={375}
//             alt="일기 이미지"
//             // className="w-[375px] h-[375px]"
//             className="w-full h-[375px] object-cover"
//           />
//         </div>

//         {/* Diary Content Container*/}
//         <div className="flex flex-col fixed min-h-[400px] bottom-0 left-0 w-full px-34 pt-20 pb-40 gap-12 rounded-tl-3xl rounded-tr-3xl bg-SemiWhite">
//           {/* Date & Edit button */}
//           <div className="flex justify-between items-center">
//             <span className="text-SemiBlack font-semibold text-20">
//               {diaryDetails.gameDate}
//             </span>
//             <button className="flex justify-end" onClick={handleEditClick}>
//               <Image
//                 src={EditIcon}
//                 alt="일기 수정 버튼"
//                 width={24}
//                 height={23}
//               />
//             </button>
//           </div>

//           {/* Game Result & Stadium*/}
//           <div className="flex flex-col ">
//             {/* Result */}
//             <div className="flex flex-row gap-33 py-10 items-center border-t-1 border-solid border-Gray">
//               <span className="font-serif font-normal text-12 text-DarkGray">
//                 Result
//               </span>
//               <p className="flex gap-10 items-center">
//                 <span className="text-12 font-semibold text-SemiBlack">
//                   {diaryDetails.homeTeam}
//                 </span>
//                 <span className="text-20 font-bold text-MainColor">
//                   {diaryDetails.homeScore}
//                 </span>
//               </p>
//               <p className="flex gap-10 items-center">
//                 <span className="text-12 font-semibold text-SemiBlack">
//                   {diaryDetails.awayTeam}
//                 </span>
//                 <span className="text-20 font-bold text-MainColor">
//                   {diaryDetails.awayScore}
//                 </span>
//               </p>
//             </div>

//             {/* Stadium */}
//             <div className="flex flex-row gap-22 py-10 items-center border-t-1 border-b-1 border-solid border-Gray">
//               <span className="font-serif font-normal text-12 text-DarkGray">
//                 Stadium
//               </span>
//               <p className="text-12 font-semibold text-SemiBlack">
//                 {diaryDetails.gameStadium}
//               </p>
//             </div>
//           </div>
//           <p className="text-17 font-normal text-SemiBlack leading-[150%] break-words">
//             {diaryDetails.content}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// // return (
// //   <>
// //     <div className="flex flex-col mx-36 my-20 px-20 py-20 gap-15 bg-SemiWhite ">
// //       <button className="flex justify-end" onClick={handleEditClick}>
// //         <Image src={EditIcon} alt="일기 수정 버튼" width={24} height={23} />
// //       </button>
// //       <div className="flex flex-col gap-26">
// //         <div className="width-[260px] justify-center">
// //           <Image
// //             src={diaryDetails.gameImg}
// //             alt="직관 일기 이미지"
// //             width={260}
// //             height={260}
// //           />
// //         </div>
// //         <p className="text-17 font-normal text-SemiBlack leading-[130%]">
// //           {diaryDetails.content}
// //         </p>
// //       </div>
// //       <div className="flex flex-row justify-between mt-10 pt-20 border-t-1 border-dashed border-SemiBlack ">
// //         <div className="flex flex-col gap-10 ">
// //           <span className="text-18 text-SemiBlack font-normal">
// //             {diaryDetails.gameDate}
// //           </span>
// //           <span className="text-18 text-SemiBlack font-semibold">
// //             {diaryDetails.homeTeam} vs {diaryDetails.awayTeam}
// //           </span>
// //           <span className="text-18 text-MainColor font-normal">
// //             {diaryDetails.homeScore} : {diaryDetails.awayScore} (
// //             {diaryDetails.gameResult})
// //           </span>
// //           <span className="text-16 text-SemiBlack font-normal">
// //             {diaryDetails.gameStadium}
// //           </span>
// //         </div>
// //         {/* <Image
// //           src={WinStamp}
// //           alt="승리 스탬프"
// //           width={78}
// //           height={78}
// //           className="flex items-end"
// //         /> */}
// //       </div>
// //     </div>
// //   </>
// // );
// // }

import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { diaryDetailsAtom } from '@/recoil/diary/diaryDetailsAtom';
import { useRouter } from 'next/navigation';
import EditIcon from '../../public/icons/Edit.svg';

export default function Ticket() {
  const diaryDetails = useRecoilValue(diaryDetailsAtom); // 여러 일기를 저장한 배열

  const router = useRouter();

  const handleEditClick = (diaryId: string) => {
    if (diaryId) {
      router.push(`/diary/edit/${diaryId}`);
    }
  };

  if (!diaryDetails || diaryDetails.length === 0) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <div>
        {/* 여러 일기를 map으로 순회하여 렌더링 */}
        {diaryDetails.map((diaryDetails) => (
          <div key={diaryDetails.diaryId}>
            <div className="flex items-center justify-center">
              <Image
                src={diaryDetails.gameImg}
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
                  {diaryDetails.gameDate}
                </span>
                <button
                  className="flex justify-end"
                  onClick={() => handleEditClick(diaryDetails.diaryId)}
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
                      {diaryDetails.homeTeam}
                    </span>
                    <span className="text-20 font-bold text-MainColor">
                      {diaryDetails.homeScore}
                    </span>
                  </p>
                  <p className="flex gap-10 items-center">
                    <span className="text-12 font-semibold text-SemiBlack">
                      {diaryDetails.awayTeam}
                    </span>
                    <span className="text-20 font-bold text-MainColor">
                      {diaryDetails.awayScore}
                    </span>
                  </p>
                </div>

                {/* Stadium */}
                <div className="flex flex-row gap-22 py-10 items-center border-t-1 border-b-1 border-solid border-Gray">
                  <span className="font-serif font-normal text-12 text-DarkGray">
                    Stadium
                  </span>
                  <p className="text-12 font-semibold text-SemiBlack">
                    {diaryDetail.gameStadium}
                  </p>
                </div>
              </div>
              <p className="text-17 font-normal text-SemiBlack leading-[150%] break-words">
                {diaryDetail.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
