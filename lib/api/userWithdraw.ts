export async function userWithdraw(): Promise<{
  isSuccess: boolean;
  message: string;
}> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/withdraw`,
      {
        method: 'POST',
        credentials: 'include',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      isSuccess: data.isSuccess,
      message: data.message,
    };
  } catch (error) {
    console.error('회원 탈퇴 요청 실패', error);
    return {
      isSuccess: false,
      message: '회원 탈퇴 요청시 문제가 발생했습니다',
    };
  }
}
