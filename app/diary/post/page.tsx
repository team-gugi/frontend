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
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const router = useRouter();

  const handleSubmit = async (diaryInfo: IDiaryInfo, gameImg: File | null) => {
    setIsSubmitting(true);
    setError('');
    setIsLoading(true); // 로딩 시작

    try {
      const response = await postDiaryApi(diaryInfo, gameImg || undefined);
      if (response.isSuccess == true) {
        console.log('일기가 성공적으로 등록되었습니다');
        setIsSubmitting(false);

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

      {/* 로딩 상태일 때 화면 어둡게 */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-4">
              <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce"></div>
              <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce [animation-delay:-.5s]"></div>
            </div>
            <p className="text-white">일기를 등록 중입니다...</p>
          </div>
        </div>
      )}
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
