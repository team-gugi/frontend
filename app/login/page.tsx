'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import kakakIcon from '../public/icons/Kakao.svg';
import WhiteArrowIcon from '../public/icons/Arrow_green.svg';
import { redirectToKakao } from '@/lib/api/kakaoAuthApi';
export default function LoginPage() {
  // const router = useRouter();

  // useEffect(() => {
  //   // 카카오 로그인 후 리디렉션된 경우, 쿠키에서 register token을 확인
  //   const cookies = document.cookie.split('; ').reduce(
  //     (acc, cookie) => {
  //       const [key, value] = cookie.split('=');
  //       acc[key] = value;
  //       return acc;
  //     },
  //     {} as Record<string, string>,
  //   );

  //   const registerToken = cookies['register_token'];

  //   if (registerToken) {
  //     // 가입 여부 확인 API 호출
  //     checkUserRegistration(registerToken);
  //   }
  // }, [router]);

  // const checkUserRegistration = async (registerToken: string) => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/check-registration`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           Authorization: `Bearer ${registerToken}`,
  //         },
  //       },
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       if (data.isRegistered) {
  //         // 이미 가입된 유저는 홈 화면으로 리디렉션
  //         router.push('/home');
  //       } else {
  //         // 가입되지 않은 유저는 프로필 설정 페이지로 리디렉션
  //         router.push('/profile');
  //       }
  //     } else {
  //       console.error('가입 여부 확인 실패');
  //     }
  //   } catch (error) {
  //     console.error('Error checking user registration:', error);
  //   }
  // };
  return (
    <>
      <div className="flex flex-col items-center px-40 mt-[248px]">
        <p className="relative self-stretch font-semibold text-82">
          <span className="text-SemiBlack tracking-[-2.69px]">야</span>
          <span className="text-MainColor tracking-[-2.69px]">구</span>
          <span className="text-SemiBlack tracking-[-2.69px]">,</span>
        </p>
        <div className="relative self-stretch font-semibold text-82 tracking-[-3.28px] leading-[98.4px]">
          처음
        </div>
        <div className="relative self-stretch font-semibold text-82 tracking-[-3.28px] leading-[98.4px]">
          이세요?
        </div>
      </div>

      <div className="flex px-40 py-10 items-center mt-63">
        {/* <div className="flex px-40 py-10 items-center mt-20"> */}
        <button
          onClick={redirectToKakao}
          className="flex flex-row w-full px-20 items-center justify-center py-20 gap-8 bg-[#FEE500] rounded-lg"
        >
          <Image
            src={kakakIcon}
            alt="카카오 간편 로그인 아이콘"
            width={18}
            height={18}
          />
          <span className="font-normal text-SemiBlack text-16">
            카카오 간편 로그인
          </span>
        </button>
      </div>

      <div className="flex flex-row justify-end">
        <Link
          href="/home"
          className="flex flex-row justify-end mt-18 px-42 py-8 gap-8"
          // className="flex flex-row justify-end mt-39 overflow-hidden px-14 py-8 gap-8"
        >
          {' '}
          {/* /chatbot 페이지로 이동하는 링크 추가 */}
          <p className="text-16 text-SemiBlack font-normal cursor-pointer">
            로그인 없이 서비스 둘러보기
          </p>
          <Image
            src={WhiteArrowIcon}
            alt="AI 챗봇 바로가기 버튼"
            width={23}
            height={8}
          />
        </Link>
      </div>
    </>
  );
}
