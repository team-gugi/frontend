'use client';
import React, { Suspense, useEffect, useState } from 'react';

import ProfileStep1 from './components/ProfileStep1';
import ProfileStep2 from './components/ProfileStep2';
import ProfileStep3 from './components/ProfileStep3';
import { useSearchParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { profileAtom } from '@/recoil/profileAtom';

export default function ProfilePage() {
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [step, setStep] = useState(1);

  const [registerToken, setRegisterToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = new URLSearchParams(window.location.search).get(
        'register_token',
      );
      setRegisterToken(token);
    }
  }, []);
  // console.log(registerToken);

  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const token = searchParams.get('register_token');
  //   if (token) {
  //     setRegisterToken(token);
  //   }
  //   console.log(token);
  // }, [searchParams]);

  // useEffect(() => {
  //   const token = new URLSearchParams(window.location.search).get(
  //     'register_token',
  //   );
  //   console.log(token);
  //   if (token) {
  //     setRegisterToken(token);
  //   }
  // }, []);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Suspense fallback={<div>Loading...</div>}>
          {step === 1 && <ProfileStep1 onNext={handleNextStep} />}
          {step === 2 && (
            <ProfileStep2 onNext={handleNextStep} onBack={handlePrevStep} />
          )}
          {step === 3 && (
            <ProfileStep3
              onBack={handlePrevStep}
              registerToken={registerToken || ''}
            />
          )}
        </Suspense>
      </div>
    </>
  );
}

// 'use client';
// import React, { Suspense, useEffect, useState } from 'react';

// import ProfileStep1 from './components/ProfileStep1';
// import ProfileStep2 from './components/ProfileStep2';
// import ProfileStep3 from './components/ProfileStep3';
// import { useSearchParams } from 'next/navigation';
// import { useRecoilState } from 'recoil';
// import { profileAtom } from '@/recoil/profileAtom';

// export default function ProfilePage() {
//   // const [profile, setProfile] = useRecoilState(profileAtom);
//   // const [step, setStep] = useState(1);

//   // const [registerToken, setRegisterToken] = useState<string | null>(null);

//   // const searchParams = useSearchParams();

//   // // useEffect(() => {
//   // //   const token = searchParams.get('register_token');
//   // //   if (token) {
//   // //     setRegisterToken(token);
//   // //   }
//   // // }, [searchParams]);

//   // useEffect(() => {
//   //   const token = new URLSearchParams(window.location.search).get(
//   //     'register_token',
//   //   );
//   //   if (token) {
//   //     setRegisterToken(token);
//   //   }
//   // }, []);

//   // const handleNextStep = () => {
//   //   setStep((prevStep) => prevStep + 1);
//   // };

//   // const handlePrevStep = () => {
//   //   setStep((prevStep) => Math.max(prevStep - 1, 1));
//   // };

//   return (
//     <>
//       {/* <div className="flex flex-col items-center justify-center min-h-screen p-4">
//         <Suspense fallback={<div>Loading...</div>}>
//           {step === 1 && <ProfileStep1 onNext={handleNextStep} />}
//           {step === 2 && (
//             <ProfileStep2 onNext={handleNextStep} onBack={handlePrevStep} />
//           )}
//           {step === 3 && (
//             <ProfileStep3
//               onBack={handlePrevStep}
//               registerToken={registerToken || ''}
//             />
//           )}
//         </Suspense>
//       </div> */}
//     </>
//   );
// }
