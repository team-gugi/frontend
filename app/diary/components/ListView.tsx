// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import SpotIcon from '../../public/icons/Spot_MainColor.svg';
// import WinStampIcon from '../../public/icons/win_temp.svg';
// import { useRecoilValue } from 'recoil';
// import { diaryAtom, DiaryEntry } from '@/recoil/diary/diaryAtom';

// export default function ListView() {
//   const diaries = useRecoilValue(diaryAtom);

//   return (
//     <div className="flex flex-col px-30 py-4 gap-24 mb-52 ">
//       {diaries.map((diary: DiaryEntry, index) => (
//         <Link key={index} href={`/diary/${diary.diaryId}`} passHref>
//           <div className="flex items-center gap-4 relative">
//             {/* Timeline Dot */}
//             <div className="absolute left-0 top-6 w-8 h-8 bg-SemiBlack rounded-full" />
//             <div className="absolute left-3 top-14 w-px min-h-[140px] bg-LightGray" />

//             {/* Content & Image in a row */}
//             <div className="flex flex-row pt-3 gap-6 pl-18 w-full">
//               {/* Text Content */}
//               <div className="flex-1 flex flex-col gap-8 ">
//                 <p className="text-14 font-normal text-SemiBlack">
//                   {diary.gameDate}
//                 </p>
//                 <p className="text-18 font-semibold text-SemiBlack">
//                   {diary.homeTeam} vs {diary.awayTeam}
//                 </p>
//                 <div className="flex items-center text-12 font-normal text-MainColor gap-1">
//                   <Image
//                     src={SpotIcon}
//                     alt="위치 아이콘"
//                     width={14}
//                     height={14}
//                   />
//                   <p className="text-14 text-MainColor font-normal">
//                     {diary.gameStadium}
//                   </p>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="flex-shrink-0">
//                 <Image
//                   src={diary.gameImg}
//                   // src={diary.gameImg || '/placeholder.png'}
//                   alt="경기 이미지"
//                   width={100}
//                   height={100}
//                   // className="rounded-lg object-cover"
//                   className="w-[100px] h-[100px] object-cover rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpotIcon from '../../public/icons/Spot_MainColor.svg';
import WinStampIcon from '../../public/icons/win_temp.svg';
import Avatar from '../../public/icons/avatar.svg';
import { useRecoilValue } from 'recoil';
import { diaryAtom, DiaryEntry } from '@/recoil/diary/diaryAtom';

export default function ListView() {
  const diaries = useRecoilValue(diaryAtom);

  return (
    <div className="flex flex-col px-30 py-4 gap-24 mb-52 ">
      {diaries.length > 0 ? (
        diaries.map((diary: DiaryEntry, index) => (
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
                    alt="경기 이미지"
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex items-center gap-4 relative">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-6 w-8 h-8 bg-SemiBlack rounded-full" />
          <div className="absolute left-3 top-14 w-px min-h-[140px] bg-LightGray" />

          {/* Content & Image in a row */}
          <div className="flex flex-row pt-3 gap-6 pl-18 w-full">
            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-8 ">
              <p className="text-14 font-normal text-SemiBlack">
                작성된 일기가 없습니다.
              </p>
              <p className="text-14 font-normal text-Gray">
                새로운 일기를 작성해보세요!
              </p>
            </div>

            {/* Placeholder Image */}
            <div className="flex-shrink-0">
              <div className="w-[100px] h-[100px] bg-LightGray rounded-lg flex items-center justify-center text-Gray">
                {/* 이미지 없음 */}
                {/* <Image
                  src={Avatar}
                  width={100}
                  height={100}
                  alt="구기 캐릭터"
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
