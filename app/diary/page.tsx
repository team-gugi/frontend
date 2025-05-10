'use client';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Tabs from './components/Tabs';

import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { diaryAtom } from '@/recoil/diary/diaryAtom';
import { useEffect, useState } from 'react';
import { fetchDiaryList } from '@/lib/api/fetchDiaryApi';
import { getWinRate } from '@/lib/api/winRateApi';
import { winRateAtom } from '@/recoil/diary/winRateAtom';

export default function DiaryPage() {
  const [diaries, setDiaries] = useRecoilState(diaryAtom);
  const [winRateData, setWinRateData] = useRecoilState(winRateAtom);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getDiaryList = async () => {
      try {
        const diaryData = await fetchDiaryList();
        setDiaries(diaryData);
      } catch (error: any) {
        if (error.message.includes('401') || error.message.includes('404')) {
          router.push('/login');
        } else {
          setError('일기 데이터를 가져오는데 실패했습니다. 다시 시도해주세요.');
        }
      }
    };

    const getWinRateData = async () => {
      try {
        const winRate = await getWinRate();
        setWinRateData(winRate);
      } catch (error) {
        setError('승률 데이터를 가져오는데 실패했습니다. 다시 시도해주세요.');
      }
    };

    getDiaryList();
    getWinRateData();
  }, [setDiaries, setWinRateData]);

  return (
    <>
      <Header />
      <Tabs />
      {/* {error && <div className="text-red-500">{error}</div>} 에러 메시지 표시 */}
      <Navigation />
    </>
  );
}
