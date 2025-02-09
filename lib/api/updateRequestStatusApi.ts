export async function updateRequestStatus(requestId: string, status: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/mate-requests/${requestId}/status?status=${status}`,
      {
        method: 'POST',
        credentials: 'include',
      },
    );

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message }; // 성공 메시지 반환
    } else {
      return { success: false, message: data.message }; // 실패 메시지 반환
    }
  } catch (error) {
    console.error('Error while updating request status:', error);
    return {
      success: false,
      message: '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
    };
  }
}
