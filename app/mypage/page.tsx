import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ProfileInfo from './components/ProfileInfo';
import MatchStatus from './components/MatchStatus';

export default function MyPage() {
  return (
    <>
      <Header />
      <ProfileInfo />
      <MatchStatus />
      <Navigation />
    </>
  );
}
