import { useRouter } from 'next/navigation';
export const fetchDiaryList = async () => {
  const router = useRouter();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/diary/all`,
      {
        credentials: 'include',
      },
    );
    if (!response.ok) {
      throw new Error('일기 데이터를 가져오는데 실패했습니다.');
    }

    if (response.status === 404 || response.status === 401) {
      router.push('/login');
    }

    const data = await response.json();
    if (data.isSuccess) {
      return data.payload;
    } else {
      throw new Error(data.message || '일기 데이터를 가져오는데 실패했습니다.');
    }
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : '일기 데이터를 가져오는데 오류가 발생했습니다.',
    );
  }
};
