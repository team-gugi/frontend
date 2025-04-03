import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function InitialPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token'); // 쿠키에서 'token' 값을 가져옴

  // 토큰이 있으면 /home으로 리디렉션
  if (token) {
    redirect('/home');
  }

  // 토큰이 없으면 /login으로 리디렉션
  redirect('/login');

  return null; // 페이지는 렌더링되지 않음, 바로 리디렉션
}
