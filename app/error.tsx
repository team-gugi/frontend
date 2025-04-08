'use client';

import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  console.log('Error: ', error);

  return (
    <>
      <div>예상치 못한 오류가 발생했습니다.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
}
