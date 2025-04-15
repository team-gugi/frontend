'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import DiaryForm from '../components/DiaryForm';

import Image from 'next/image';

import CheckIcon from '../../public/icons/Circlecheck.svg';
import { useState } from 'react';

import { IDiaryInfo, postDiaryApi } from '@/lib/api/createDiaryApi';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function DiaryPostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const router = useRouter();

  const handleSubmit = async (diaryInfo: IDiaryInfo, gameImg: File | null) => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await postDiaryApi(diaryInfo, gameImg || undefined);
      if (response.isSuccess == true) {
        console.log('일기가 성공적으로 등록되었습니다');

        // 모달 표시
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false); // 모달 닫기
          router.push('/diary'); // 페이지 이동
        }, 1500); // 1.5초 후 이동
        // router.push('/diary');
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-SemiBlack bg-opacity-50">
          <div className="flex flex-col items-center justify-center gap-12 bg-BlockColor px-30 py-45 rounded-xl shadow-lg">
            <Image src={CheckIcon} alt="check icon" width={20} height={20} />
            <p className="text-18 font-extralight text-SemiBlack">
              <span className="text-MainColor font-bold">일기 작성</span>이
              완료되었습니다.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
