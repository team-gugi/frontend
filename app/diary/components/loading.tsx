import React from 'react';

export default function Loading() {
  return (
    // <div className="flex flex-col gap-12 py-[260px] items-center justify-center bg-pink-100">
    //   <span className="font-normal text-MainColor text-14 animate-bounce">
    //     일기 불러오는 중...
    //   </span>

    //   <div className="flex flex-row gap-4">
    //     <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce"></div>
    //     <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce [animation-delay:-.3s]"></div>
    //     <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce [animation-delay:-.5s]"></div>
    //   </div>
    // </div>
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col gap-12 items-center py-20 justify-center">
        <span className="font-normal text-MainColor text-16 animate-bounce">
          일기 불러오는 중...
        </span>

        <div className="flex flex-row gap-4">
          <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce"></div>
          <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-10 h-10 rounded-full bg-MainColor animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </div>
  );
}
