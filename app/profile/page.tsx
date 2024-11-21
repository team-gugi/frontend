'use client';
import React, { useState } from 'react';

import ProfileStep1 from './components/ProfileStep1';
import ProfileStep2 from './components/ProfileStep2';

export default function ProfilePage() {
  const [step, setStep] = useState(1);

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

      {/* {step === 3 && (
        <ProfileStep3 onFinish={() => alert("프로필 설정 완료!")} onBack={handlePreviousStep} />
      )}  */}
    </div>
  );
}
