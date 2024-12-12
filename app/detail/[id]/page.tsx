import Header from '@/components/Header';
import { getTeamDetails } from '@/lib/api/teamDetailsApi';
import TeamDetail from '../components/TeamDetail';
import Navigation from '@/components/Navigation';

interface ITeamDetails {
  teamCode: string;
  teamLogo: string;
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
    console.log(teamData);

    return (
      <>
        <Header />
        <TeamDetail
          code={teamData.teamCode}
          logo={teamData.teamLogo}
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
