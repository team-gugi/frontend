import { useRouter } from 'next/navigation';

export const getWinRate = async () => {
  const router = useRouter();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/diary/win-rate`,
    { credentials: 'include' },
  );

  if (!response.ok) {
    throw new Error('승률 정보를 불러오는데 실패했습니다');
  }

  if (response.status === 404 || response.status === 401) {
    router.push('/login');
  }

  const data = await response.json();
  return data.payload;

  //   if (data.isSuccess) {
  //     return data.payload;
  //   } else {
  //     throw new Error('승률 데이터를 가져오는 데 실패했습니다.');
  //   }
};
