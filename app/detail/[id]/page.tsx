'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

import samsung from '../../public/icons/logo_samsung.svg';
import TeamDetail from '../components/TeamDetail';

interface Team {
  id: string;
  name: string;
  logo: string;
  description: string;
  schedule: string[];
}

const TeamDetailPage = () => {
  const router = useRouter();
  //   const { id } = router.query;

  // 삼성 팀에 대한 목업 데이터
  const teamData: Team = {
    id: 'samsung',
    name: '삼성 라이온즈',
    logo: samsung,
    description:
      '1982년 한국 프로야구 출범 당시부터 명맥을 이어오고 있는 원년 구단 중 하나이며 연고지는 대구광역시다.',
    schedule: [
      '2024년 3월 1일 vs LG 트윈스',
      '2024년 3월 3일 vs SSG 랜더스',
      '2024년 3월 5일 vs 키움 히어로즈',
    ],
  };

  //   if (!teamData || teamData.id !== id) {
  //     return <div>팀 정보를 로딩 중...</div>;
  //   }

  return (
    <>
      <Header />
      <TeamDetail
        logo={teamData.logo}
        name={teamData.name}
        description={teamData.description}
      />

      <Navigation />
    </>
  );
};

export default TeamDetailPage;
