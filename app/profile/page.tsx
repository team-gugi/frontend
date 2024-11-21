'use client';
import React, { useState } from 'react';

import ProfileStep1 from './components/ProfileStep1';

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
    </div>
  );
}
