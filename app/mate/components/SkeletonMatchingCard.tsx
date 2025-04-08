'use client';

export default function MatchingCardSkeleton() {
  return (
    <div className="relative flex flex-col gap-20 pt-16">
      <div className="relative">
        <div className="flex flex-col px-24 py-20 bg-gray-100 gap-13 rounded-[10px] min-h-234 animate-pulse">
          <div className="flex flex-row justify-between">
            <div className="bg-LightGray w-[215px] h-20 rounded"></div>
            <div className="bg-LightGray w-32 h-20 rounded"></div>
          </div>

          <div className="flex bg-LightGray w-full h-32 rounded pb-13 "></div>
          <div className="flex w-full rounded border-solid border-b-[1px] border-LightGray"></div>

          <div className="flex flex-row justify-between items-center">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="px-24 py-10 bg-LightGray  whitespace-nowrap"
                  style={{ borderRadius: '30px' }}
                ></div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center min-w-64 leading-[100%] min-h-38 px-10 py-5 rounded-[10px] bg-LightGray"></div>
          </div>

          <div className="flex px-85 py-15 items-center justify-center bg-LightGray  rounded-xl w-full h-12"></div>
        </div>
      </div>
    </div>
  );
}
