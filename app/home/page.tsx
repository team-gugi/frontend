import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Rank from './components/Rank';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Carousel />
      <Rank />
      {/* <LoadingSpinner /> */}
      {/* <Suspense fallback={<LoadingSpinner />}>
        <Rank />
      </Suspense> */}
      <Navigation />
    </>
  );
}
