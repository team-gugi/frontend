export async function fetchDiaryDetails(diaryId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/diary/details?diaryId=${diaryId}`,
    {
      credentials: 'include',
    },
  );
  if (!response.ok) {
    console.log('diaryId', diaryId);
    throw new Error('일기 상세 정보를 가져오는데 실패했습니다.');
  }
  const data = await response.json();
  if (data.isSuccess) {
    return data.payload;
  } else {
    throw new Error(data.message || '일기 상세 정보 조회 실패');
  }
}
