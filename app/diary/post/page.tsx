'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import DiaryForm from '../components/DiaryForm';
import { useState } from 'react';

import { IDiaryInfo, postDiaryApi } from '@/lib/api/createDiaryApi';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function DiaryPostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (diaryInfo: IDiaryInfo, gameImg: File | null) => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await postDiaryApi(diaryInfo, gameImg || undefined);
      if (response.isSuccess == true) {
        console.log('일기가 성공적으로 등록되었습니다');
        router.push('/diary');
      }
    } catch (error) {
      setError('일기 등록에 실패 했습니다. 다시 시도 해주세요');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div>
        <Header />
        <PageTitle title="오늘의 직관 일기 작성하기" />
        <DiaryForm buttonText="일기 등록하기" onSubmit={handleSubmit} />
        {/* {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )} */}
        <Navigation />
      </div>
    </>
  );
}
