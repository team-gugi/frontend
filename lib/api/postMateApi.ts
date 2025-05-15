interface IMateOptions {
  gender: string;
  age: string;
  date: string;
  team: string;
  member: number;
  stadium: string;
}

interface IMatePost {
  title: string;
  content: string;
  contact: string;
  options: IMateOptions;
}

export const createMatePost = async (mateData: IMatePost) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/mate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mateData),
      credentials: 'include',
    },
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '직관메이트 게시물 생성 실패');
    console.log('직관메이트 게시물 생성 실패');
  }

  return await response.json(); // 성공 시 { code, message, isSuccess } 반환
};
