'use client';
import React, { useEffect, useState } from 'react';

import ProfileStep1 from './components/ProfileStep1';
import ProfileStep2 from './components/ProfileStep2';
import ProfileStep3 from './components/ProfileStep3';
import { useSearchParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { profileAtom } from '@/recoil/profileAtom';

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [step, setStep] = useState(1);

  const [registerToken, setRegisterToken] = useState<string | null>(null); // registerToken을 상태로 관리

  useEffect(() => {
    const token = searchParams.get('register_token');
    if (token) {
      //   setProfile((prev) => ({ ...prev, registerToken: token }));
      setRegisterToken(token);
    }
  }, [searchParams]);
  //   console.log('register token', registerToken);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {step === 1 && <ProfileStep1 onNext={handleNextStep} />}
      {step === 2 && (
        <ProfileStep2 onNext={handleNextStep} onBack={handlePrevStep} />
      )}
      {step === 3 && (
        <ProfileStep3
          onBack={handlePrevStep}
          registerToken={registerToken || ''} // registerToken을 ProfileStep3로 전달
        />
      )}
    </div>
  );
}
