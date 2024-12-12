import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Rank from './components/Rank';

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Carousel />
      <Rank />
      <Navigation />
    </>
  );
}
