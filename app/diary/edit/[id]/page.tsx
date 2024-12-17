//일기 수정 페이지

'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import DiaryForm from '../../components/DiaryForm';

export default function DiaryEditPage() {
  return (
    <>
      <Header />
      <PageTitle title="일기 수정하기" />
      <DiaryForm
        buttonText="수정 완료"
        initialData={{
          date: '2024-12-11',
          stadium: '대구 삼성 라이온즈 파크',
          homeTeam: '삼성 라이온즈',
          awayTeam: '롯데 자이언츠',
          homeScore: '7',
          awayScore: '4',
          content: '기존에 작성했던 일기 내용입니다...',
        }}
      />

      <Navigation />
    </>
  );
}
