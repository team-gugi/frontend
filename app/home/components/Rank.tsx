'use client';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { kboRankingAtom } from '@/recoil/kboRankingAtom';
import { getKboRanking } from '@/lib/api/kboRankingApi';
import TableBodyText from './TableBodyText';
import TableHeadText from './TableHeadText';

const SkeletonRow = () => (
  <tr className="flex gap-32 items-center animate-pulse">
    {Array(7)
      .fill('')
      .map((_, index) => (
        <td
          key={index}
          className="h-7 bg-LightGray rounded"
          style={{ flex: index === 0 ? '0 0 10px' : '1 0 auto' }}
        />
      ))}
  </tr>
);

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export default function Rank() {
  const [kboRanking, setKboRanking] = useRecoilState(kboRankingAtom);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(formatDate(new Date())); // 현재 날짜 설정
    const fetchRanking = async () => {
      try {
        const rankingData = await getKboRanking();
        setKboRanking(rankingData);
        setLoading(false); // 로딩 상태 종료
        console.log('rankingData:', rankingData);
      } catch (error) {
        console.error('KBO 순위 데이터를 가져오는 데 실패했습니다.', error);
      }
    };

    fetchRanking();
  }, [setKboRanking]);

  return (
    <section className="pt-10 pb-80 px-24">
      <div className="flex flex-row gap-4 items-center">
        <span className="font-normal text-14 text-Gray">KBO 실시간 순위</span>
        <span className="font-normal text-12 text-LightGray text-self-end ">
          ({currentDate} 기준)
        </span>
      </div>

      <table className="w-full">
        <thead>
          <tr className="pt-16 pl-58 pb-10 my-14 flex gap-22 border-b-1 border-solid border-Gray">
            <TableHeadText text="경기수" />
            <TableHeadText text="승" />
            <TableHeadText text="패" />
            <TableHeadText text="무" />
            <TableHeadText text="승률" />
            <TableHeadText text="게임차" />
          </tr>
        </thead>
        {/* <tbody className="flex flex-col gap-20 max-h-[250px] overflow-y-auto">
          {kboRanking.map((team) => (
            <tr className="flex gap-14 items-center" key={team.teamRank}>
              <td className="font-normal text-14 shrink-0 max-w-10 text-right">
                {team.teamRank}
              </td>
              <td className="flex font-normal items-center justify-center text-center text-14 shrink-0 w-[28px]">
                {team.team}
              </td>
              <TableBodyText text={team.game.toString()} />
              <TableBodyText text={team.win.toString()} />
              <TableBodyText text={team.lose.toString()} />
              <TableBodyText text={team.draw.toString()} />
              <TableBodyText text={team.winningRate.toFixed(3)} />
              <TableBodyText text={team.difference.toString()} />
            </tr>
          ))}
        </tbody> */}

        <tbody className="flex flex-col gap-20 max-h-[250px] overflow-y-auto">
          {loading
            ? Array(10) // Skeleton rows 수
                .fill('')
                .map((_, index) => <SkeletonRow key={index} />)
            : kboRanking.map((team) => (
                <tr className="flex gap-14 items-center" key={team.teamRank}>
                  <td className="font-normal text-14 shrink-0 max-w-10 text-right">
                    {team.teamRank}
                  </td>
                  <td className="flex font-normal items-center justify-center text-center text-14 shrink-0 w-[28px]">
                    {team.team}
                  </td>
                  <TableBodyText text={team.game.toString()} />
                  <TableBodyText text={team.win.toString()} />
                  <TableBodyText text={team.lose.toString()} />
                  <TableBodyText text={team.draw.toString()} />
                  <TableBodyText text={team.winningRate.toFixed(3)} />
                  <TableBodyText text={team.difference.toString()} />
                </tr>
              ))}
        </tbody>
      </table>
    </section>
  );
}
