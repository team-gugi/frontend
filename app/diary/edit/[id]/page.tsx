// 'use client';

// import Header from '@/components/Header';
// import Navigation from '@/components/Navigation';
// import PageTitle from '@/components/PageTitle';
// import DiaryForm from '../../components/DiaryForm';
// import { useEffect, useState } from 'react';
// import { redirect, useParams } from 'next/navigation';
// import { editDiaryApi, IUpdateDiaryInfo } from '@/lib/api/updateDiaryApi';
// import { useRouter } from 'next/router';
// import { fetchDiaryDetails } from '@/lib/api/diaryDetailsApi';
// import { useRecoilValue } from 'recoil';
// import { diaryDetailsAtom } from '@/recoil/diary/diaryDetailsAtom';

// export default function DiaryEditPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   const initialData = useRecoilValue(diaryDetailsAtom);
//   const { diaryId } = useParams();

//   const handleSubmit = async (
//     // diaryId: IUpdateDiaryInfo,
//     diaryInfo: IUpdateDiaryInfo,
//     gameImg: File | null,
//   ) => {
//     setIsSubmitting(true);
//     setError('');

//     try {
//       const response = await editDiaryApi(
//         //diaryId,
//         // diaryInfo,
//         // gameImg || undefined,
//       );
//       if (response.isSuccess) {
//         console.log('일기가 성공적으로 수정되었습니다');
//         redirect('/diary');
//       }
//     } catch (error) {
//       setError('일기 수정에 실패 했습니다. 다시 시도 해주세요');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <>
//       <Header />
//       <PageTitle title="일기 수정하기" />
//       {/* <DiaryForm
//         buttonText="수정 완료"
//         initialData={initialData}
//         onSubmit={handleSubmit}
//       /> */}
//       <Navigation />
//     </>
//   );
// }
