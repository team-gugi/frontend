'use client';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Tabs from './components/Tabs';
import DiaryErrorModal from './components/DiaryErrorModal';

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

  const [modal, setModal] = useState(false);

  const router = useRouter();

  const onClose = () => {
    setModal(false); // 모달 닫기
  };

  const onConfirm = () => {
    router.push('/login'); // 로그인 페이지로 이동
  };

  useEffect(() => {
    const getDiaryList = async () => {
      try {
        const diaryData = await fetchDiaryList();
        setDiaries(diaryData);
      } catch (error: any) {
        if (error.message.includes('401') || error.message.includes('404')) {
          router.push('/login');
        } else {
          setModal(true); // 모달 표시
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
      {modal && (
        <DiaryErrorModal
          message="로그인이 필요한 서비스 입니다. 로그인 후 더 자유롭게 구기를 즐겨보세요!"
          onClose={onClose}
          onConfirm={onConfirm}
        />
      )}
      {/* {error && <div className="text-red-500">{error}</div>} 에러 메시지 표시 */}
      <Navigation />
    </>
  );
}
