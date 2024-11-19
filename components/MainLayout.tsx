'use client';

import { RecoilRoot } from 'recoil';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <div className="min-w-375 max-w-600 mx-auto">{children}</div>
    </RecoilRoot>
  );
}
