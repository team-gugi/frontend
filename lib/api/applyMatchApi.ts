export const applyMatch = async (mateId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/mate/${mateId}/apply`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      },
    );

    const data = await response.json();
    return data; // 서버의 응답 반환
  } catch (error) {
    console.error('매칭 신청 실패:', error);
    return { isSuccess: false, message: '네트워크 오류가 발생했습니다.' }; // 에러 처리
  }
};
