'use client';

import { RecoilRoot } from 'recoil';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <div className="min-w-[375px] max-w-[600px] mx-auto bg-white min-h-screen">
        {children}
      </div>
    </RecoilRoot>
  );
}
