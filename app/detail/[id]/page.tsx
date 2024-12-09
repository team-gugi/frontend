import Header from '@/components/Header';
import { getTeamDetails } from '@/lib/api/teamDetails';
import TeamDetail from '../components/TeamDetail';
import Navigation from '@/components/Navigation';

interface ITeamDetails {
  teamCode: string;
  teamName: string;
  description: string;
  instagram: string;
  youtube: string;
  ticketShop: string;
  mdShop: string;
}

export default async function TeamDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params; // url에서 teamCode 값 가져옴

  try {
    const teamData: ITeamDetails = await getTeamDetails(id);

    return (
      <>
        <Header />
        <TeamDetail
          logo={`/icons/logo_${teamData.teamCode}.svg`}
          name={teamData.teamName}
          description={teamData.description}
          instagram={teamData.instagram}
          youtube={teamData.youtube}
          ticketShop={teamData.ticketShop}
          mdShop={teamData.mdShop}
        />
        <Navigation />
      </>
    );
  } catch (error) {
    return (
      <div>
        {error instanceof Error
          ? error.message
          : '팀 정보를 불러오는 데 실패했습니다.'}
      </div>
    );
  }
}
