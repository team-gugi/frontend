'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import DiaryForm from '../components/DiaryForm';

export default function DiaryPostPage() {
  return (
    <>
      <div>
        {/* <div className="min-h-screen flex flex-col overflow-y-auto"> */}
        <Header />
        <PageTitle title="오늘의 직관 일기 작성하기" />
        <DiaryForm buttonText="일기 등록하기" />
        <Navigation />
      </div>
    </>
  );
}
