// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import WinStampIcon from '../../public/icons/win_temp.svg';
// import LocationBlackIcon from '../../public/icons/Location_black.svg';
// import { useRecoilValue } from 'recoil';
// import { diaryAtom, DiaryEntry } from '@/recoil/diary/diaryAtom';

// export default function ListView() {
//   const diaries = useRecoilValue(diaryAtom);
//   return (
//     <>
//       <div className="flex flex-col px-30 py-10 gap-18">
//         {diaries.map((diary: DiaryEntry, index) => (
//           <Link key={index} href={`/diary/${diary.diaryId}`} passHref>
//             <div
//               key={index}
//               className="flex px-10 tems-center justify-between bg-SemiWhite rounded-lg "
//             >
//               <div className="flex flex-col my-18 gap-8">
//                 <p className="text-16 font-normal text-SemiBlack">
//                   {diary.gameDate}
//                 </p>
//                 <p className="text-16 font-semibold text-SemiBlack">
//                   {diary.homeTeam} vs {diary.awayTeam}
//                 </p>
//                 <div className="flex flex-row items-center gap-4">
//                   <Image
//                     src={LocationBlackIcon}
//                     alt="위치 아이콘"
//                     width={12}
//                     height={12}
//                   />
//                   <p className="text-12 font-normal text-SemiBlack">
//                     {diary.gameStadium}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center px-10 border-l-1 border-dashed border-Gray">
//                 <Image
//                   src={WinStampIcon}
//                   alt="승리 스탬프"
//                   width={60}
//                   height={60}
//                   className={`${diary.gameResult === 'WIN' ? '' : 'hidden'}`}
//                 />
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpotIcon from '../../public/icons/Spot_MainColor.svg';
import WinStampIcon from '../../public/icons/win_temp.svg';
import { useRecoilValue } from 'recoil';
import { diaryAtom, DiaryEntry } from '@/recoil/diary/diaryAtom';

export default function ListView() {
  const diaries = useRecoilValue(diaryAtom);

  return (
    <div className="flex flex-col px-30 py-4 gap-24 mb-52 ">
      {diaries.map((diary: DiaryEntry, index) => (
        <Link key={index} href={`/diary/${diary.diaryId}`} passHref>
          <div className="flex items-center gap-4 relative">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-6 w-8 h-8 bg-SemiBlack rounded-full" />
            <div className="absolute left-3 top-14 w-px min-h-[140px] bg-LightGray" />

            {/* Content & Image in a row */}
            <div className="flex flex-row pt-3 gap-6 pl-18 w-full">
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-8 ">
                <p className="text-14 font-normal text-SemiBlack">
                  {diary.gameDate}
                </p>
                <p className="text-18 font-semibold text-SemiBlack">
                  {diary.homeTeam} vs {diary.awayTeam}
                </p>
                <div className="flex items-center text-12 font-normal text-MainColor gap-1">
                  <Image
                    src={SpotIcon}
                    alt="위치 아이콘"
                    width={14}
                    height={14}
                  />
                  <p className="text-14 text-MainColor font-normal">
                    {diary.gameStadium}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src={diary.gameImg}
                  // src={diary.gameImg || '/placeholder.png'}
                  alt="경기 이미지"
                  width={100}
                  height={100}
                  // className="rounded-lg object-cover"
                  className="w-[100px] h-[100px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
