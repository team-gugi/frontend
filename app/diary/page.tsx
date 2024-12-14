import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Tabs from './components/Tabs';

//일기 메인 홈 페이지
export default function DiaryPage() {
  return (
    <>
      <Header />
      <Tabs />
      <Navigation />
    </>
  );
}
