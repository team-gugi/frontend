// import { scheduleAtom, selectedDateAtom } from '@/recoil/scheduleAtom';
// import { useRecoilValue } from 'recoil';

// export default function ScheduleModal({ onClose }: { onClose: () => void }) {
//   const selectedDate = useRecoilValue(selectedDateAtom);
//   const schedule = useRecoilValue(scheduleAtom);

//   // 선택한 날짜의 경기 정보를 필터링
//   const filteredSchedules = schedule.flatMap((month) =>
//     month.specificSchedule.filter((game) =>
//       game.specificDate.includes(selectedDate || ''),
//     ),
//   );
//   return (
//     <div>
//       {selectedDate && (
//         <div className="modal">
//           <h2 className="text-xl font-bold">경기 일정 - {selectedDate}</h2>
//           {filteredSchedules.length > 0 ? (
//             filteredSchedules.map((game, index) => (
//               <div key={index} className="p-4 border-b">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={game.logoUrl}
//                     alt="Team Logo"
//                     className="w-10 h-10"
//                   />
//                   <span>
//                     {game.homeTeam} vs {game.awayTeam}
//                   </span>
//                 </div>
//                 <p>경기 시간: {game.time}</p>
//                 <p>경기장: {game.stadium}</p>
//                 <p>
//                   점수: {game.homeScore ?? '-'} : {game.awayScore ?? '-'}
//                 </p>
//                 {game.cancellationReason && (
//                   <p>취소 사유: {game.cancellationReason}</p>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>선택한 날짜에 경기가 없습니다.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { scheduleAtom, selectedDateAtom } from '@/recoil/scheduleAtom';
import { useRecoilValue } from 'recoil';

export default function ScheduleModal({ onClose }: { onClose: () => void }) {
  const selectedDate = useRecoilValue(selectedDateAtom); // 문자열로 수정된 selectedDateAtom 사용
  const schedule = useRecoilValue(scheduleAtom);

  console.log('selectedDate in Modal', selectedDate);

  // 선택한 날짜의 경기 정보를 필터링
  const filteredSchedules = schedule.flatMap((month) =>
    month.specificSchedule.filter(
      (game) => game.specificDate === (selectedDate || ''),
    ),
  );
  // // 목업 데이터
  // const mockData = {
  //   specificDate: '03.24(일)',
  //   homeTeam: 'KT',
  //   awayTeam: '삼성',
  //   logoUrl: 'https://gugi-bucket.s3.ap-northeast-2.amazonaws.com/kt.png',
  //   homeScore: 8,
  //   awayScore: 11,
  //   time: '14:00',
  //   stadium: '수원 KT 위즈 파크',
  //   cancellationReason: null,
  // };

  // // 테스트용 선택된 날짜
  // const selectedDate = mockData.specificDate;

  // // 선택된 날짜에 대한 경기 정보를 담는 배열
  // const filteredSchedules = [mockData]; // 목업 데이터 한 개를 리스트로 처리

  return (
    <div>
      {selectedDate && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={onClose} // 배경 클릭 시 모달 닫기
        >
          <div
            className="flex flex-col items-center py-20 px-40 gap-16 min-w-[275px] max-w-[325px] bg-White rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()} // 클릭이 내부로 전달되지 않도록
          >
            <span className="flex px-18 py-6 text-16 font-medium text-SemiBlack bg-BlockColor rounded-2xl border-solid border-2 border-MainColor">
              {selectedDate}
            </span>
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((game, index) => (
                <div key={index} className="flex flex-col items-center gap-16">
                  <div className="flex flex-col items-center gap-8">
                    <span className="text-24 font-bold text-MainColor">
                      {game.homeTeam} vs {game.awayTeam}
                    </span>
                    <p className="text-16 font-bold text-SemiBlack">
                      {game.homeScore ?? '-'} : {game.awayScore ?? '-'}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="flex gap-10">
                      <span className="text-14 font-medium text-Gray">
                        시간
                      </span>
                      <span className="text-14 font-medium text-SemiBlack">
                        {game.time}
                      </span>
                    </p>
                    <p className="flex gap-10">
                      <span className="text-14 font-medium text-Gray">
                        구장
                      </span>
                      <span className="text-14 font-medium text-SemiBlack">
                        {game.stadium}
                      </span>
                    </p>
                  </div>

                  {game.cancellationReason && (
                    <p>취소 사유: {game.cancellationReason}</p>
                  )}
                </div>
              ))
            ) : (
              <p>선택한 날짜에 경기가 없습니다.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
