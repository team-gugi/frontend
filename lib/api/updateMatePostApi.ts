export const updateMatePost = async (mateId: string, postData: any) => {
  try {
    const response = await fetch(`/api/v1/mate?mateId=${mateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
      credentials: 'include',
    });

    const data = await response.json();
    if (response.ok && data.isSuccess) {
      return { isSuccess: true, message: data.message };
    } else {
      throw new Error(data.message || '매칭글 수정 실패');
    }
  } catch (error) {
    console.error('API 호출 오류:', error);
    // throw new Error(error.message || '매칭글 수정 중 오류가 발생했습니다.');
  }
};
