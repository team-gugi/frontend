'use client';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import { fetchDiaryDetails } from '@/lib/api/diaryDetailsApi';
import { diaryDetailsAtom } from '@/recoil/diary/diaryDetailsAtom';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import DiaryForm from '../../components/DiaryForm';
import { updateDiaryDetails } from '@/lib/api/updateDiaryApi';

interface IDiaryDetails {
  gameDate: string;
  gameStadium: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  // gameImg?: File;
  gameImg?: string;
  content: string;
}

export default function DiaryEditPage() {
  const [diaryDetails, setDiaryDetails] = useState<IDiaryDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const router = useRouter();
  // const { diaryId } = router.query;
  const { diaryId } = useParams();

  useEffect(() => {
    if (diaryId) {
      setLoading(true);
      fetchDiaryDetails(diaryId as string)
        .then((data) => {
          setDiaryDetails(data); // 상세 정보 상태 설정
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [diaryId]);

  const handleSubmit = async (updatedDiary: any, gameImg: File | null) => {
    try {
      const updatedData = {
        // diaryId: diaryId as string,
        diaryId: `"${diaryId}"`,
        diaryInfo: {
          gameDate: updatedDiary.gameDate,
          gameStadium: updatedDiary.gameStadium,
          homeTeam: updatedDiary.homeTeam,
          awayTeam: updatedDiary.awayTeam,
          homeScore: updatedDiary.homeScore,
          awayScore: updatedDiary.awayScore,
          content: updatedDiary.content,
        },
        // gameImg: updatedDiary.gameImg,
        gameImg: gameImg || updatedDiary.gameImg || null,
      };
      console.log(updatedData);

      await updateDiaryDetails(updatedData); // 수정 API 호출

      // router.push('/diary');
    } catch (err) {
      console.log('수정 실패');
    }
  };

  return (
    <>
      <Header />
      <PageTitle title="직관 일기 수정하기" />
      {/* <DiaryForm
        buttonText="수정 완료"
        initialData={diaryDetails} // 수정할 일기 데이터
        onSubmit={handleSubmit} // 제출 시 처리할 함수
      />
       */}
      {diaryDetails ? (
        <DiaryForm
          buttonText="수정 완료"
          initialData={diaryDetails} // 수정할 일기 데이터
          onSubmit={handleSubmit} // 제출 시 처리할 함수
        />
      ) : (
        <div>Loading...</div> // 데이터가 없을 경우 대체 UI 표시
      )}
      <Navigation />
    </>
  );
}
