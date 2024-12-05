import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Banner from './components/Banner';
import Carousel from './components/Carousel';

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Carousel />
      <Navigation />
    </>
  );
}
