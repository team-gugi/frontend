'use client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { kboRankingAtom } from '@/recoil/kboRankingAtom';
import { getKboRanking } from '@/lib/api/kboRankingApi';
import TableBodyText from './TableBodyText';
import TableHeadText from './TableHeadText';

export default function Rank() {
  const [kboRanking, setKboRanking] = useRecoilState(kboRankingAtom);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const rankingData = await getKboRanking();
        setKboRanking(rankingData);
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
          (2024.09.30. 기준)
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
        <tbody className="flex flex-col gap-20 max-h-[250px] overflow-y-auto">
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
        </tbody>
      </table>
    </section>
  );
}
