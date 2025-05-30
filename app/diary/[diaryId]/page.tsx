'use client';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Ticket from '../components/Ticket';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { diaryDetailsAtom } from '@/recoil/diary/diaryDetailsAtom';
import { useEffect, useState } from 'react';
import { fetchDiaryDetails } from '@/lib/api/diaryDetailsApi';

export default function DiaryDetailPage({
  params,
}: {
  params: { diaryId: string };
}) {
  const { diaryId } = params;
  const [diaryDetails, setDiaryDetails] = useRecoilState(diaryDetailsAtom);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getDiaryDetails = async () => {
      try {
        const data = await fetchDiaryDetails(diaryId);
        setDiaryDetails(data);
      } catch (error) {
        console.log('일기 상세 정보를 가져오는데 실패했습니다.', error);
        setError('일기 상세 정보를 가져오는데 실패했습니다.');
      }
    };

    getDiaryDetails();
  }, [diaryId, setDiaryDetails]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!diaryDetails) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <Header />
      <Ticket />
      <Navigation />
    </>
  );
}
