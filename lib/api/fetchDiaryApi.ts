export const fetchDiaryList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/diary/all`,
    );
    if (!response.ok) {
      throw new Error('일기 데이터를 가져오는데 실패했습니다.');
    }

    const data = await response.json();
    if (data.isSuccess) {
      return data.payload;
    } else {
      throw new Error(data.message || '일기 데이터를 가져오는데 실패했습니다.');
    }
  } catch (error) {
    // fetch 실패하거나 response.json() 실패할 경우
    throw new Error(
      error instanceof Error
        ? error.message
        : '일기 데이터를 가져오는데 오류가 발생했습니다.',
    );
  }
};
