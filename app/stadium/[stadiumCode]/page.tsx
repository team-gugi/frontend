// import Image from 'next/image';
// import Header from '@/components/Header';
// import Navigation from '@/components/Navigation';
// import Error from '../components/Error';

// import LocationIcon from '../../public/icons/Location.svg';
// import LocationWhiteIcon from '../../public/icons/Locaation_white.svg';
// import HomeIcon from '../../public/icons/Home_full.svg';
// import TriangleIcon from '../../public/icons/Triangle.svg';
// import { getStadiumDetails } from '@/lib/api/stadiumApi';

// interface IFood {
//   foodName: string;
//   foodLocation: string;
//   foodImg: string;
// }

// interface IStadiumDetails {
//   stadiumName: string;
//   stadiumLocation: string;
//   teamName: string;
//   foodList: IFood[];
// }

// export default async function StadiumPage({
//   params,
// }: {
//   params: { stadiumCode: number };
// }) {
//   console.log('params:', params);
//   const { stadiumCode } = params;

//   try {
//     const stadiumData: IStadiumDetails = await getStadiumDetails(stadiumCode);
//     console.log(stadiumCode);
//     console.log(stadiumData);
//     console.log(stadiumData.foodList);

//     return (
//       <>
//         <Header />
//         <section className="flex flex-col mx-24 pt-10 pb-30 mb-20 gap-8 border-b-1 border-solid border-Gray ">
//           <div className="flex flex-row gap-6 pl-3 items-center">
//             <Image
//               src={LocationIcon}
//               alt="위치 정보 아이콘"
//               width={18}
//               height={18}
//             />
//             <span className="font-normal text-14 text-Gray">
//               {stadiumData.stadiumLocation}
//             </span>
//           </div>

//           <h1 className="font-bold text-28 text-SemiBlack items-center">
//             {stadiumData.stadiumName}
//           </h1>

//           <div className="flex flex-row gap-6 items-center pl-4">
//             <Image src={HomeIcon} alt="홈 아이콘" width={16} height={16} />
//             <span className="font-light text-14 text-DarkGray items-center">
//               {stadiumData.teamName}
//             </span>
//           </div>
//         </section>

//         <section className="flex flex-col gap-11 mx-24">
//           <div className="flex flex-col gap-4">
//             <div className="flex flex-row gap-8 items-center">
//               <Image src={TriangleIcon} alt="삼각형" width={24} height={24} />
//               <span className="font-semibold text-18 text-MainColor">
//                 {stadiumData.teamName} Best 6
//               </span>
//             </div>
//             <span className="flex px-10 font-light text-12 text-DarkGray items-center">
//               각 구장의 대표 먹거리를 찾아보세요!
//             </span>
//             <span className="flex px-10 font-light text-12 text-DarkGray items-center">
//               (이미지는 '자리어때' 에서 제공하는 사진을 사용하였습니다)
//             </span>
//           </div>

//           <div className="w-full grid grid-cols-2 gap-4">
//             {stadiumData.foodList.map((food, index) => (
//               <div
//                 key={index}
//                 className="relative flex justify-center items-center rounded-xl overflow-hidden bg-cover bg-center "
//                 style={{
//                   backgroundImage: `url(${food.foodImg})`,
//                   // width: '161px',
//                   // height: '140px',
//                 }}
//               >
//                 <Image
//                   src={food.foodImg}
//                   alt={`${food.foodName} 이미지`}
//                   layout="responsive"
//                   width={161}
//                   height={140}
//                   className="object-cover"
//                 />
//                 <div className="absolute left-10 bottom-10 flex justify-center items-center rounded-xl">
//                   <div className="flex flex-col text-White gap-6 ">
//                     <p className="font-semibold text-18">{food.foodName}</p>
//                     <div className="flex flex-row items-center gap-2">
//                       <Image
//                         src={LocationWhiteIcon}
//                         alt="위치 아이콘"
//                         width={12}
//                         height={12}
//                       />
//                       <span className="font-normal text-12 text-White">
//                         {food.foodLocation}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div></div>
//         </section>

//         <Navigation />
//       </>
//     );
//   } catch (error) {
//     return <Error errorMessage="구장 정보를 불러오지 못했습니다." />;
//     // return (
//     //   <div>
//     //     {error instanceof Error
//     //       ? error.message
//     //       : '구장 정보를 불러오는 데 실패했습니다.'}
//     //   </div>
//     // );
//   }
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Error from '../components/Error';
import StadiumSkeleton from '../components/Skeleton';

import LocationIcon from '../../public/icons/Location.svg';
import LocationWhiteIcon from '../../public/icons/Locaation_white.svg';
import HomeIcon from '../../public/icons/Home_full.svg';
import TriangleIcon from '../../public/icons/Triangle.svg';
import { getStadiumDetails } from '@/lib/api/stadiumApi';

interface IFood {
  foodName: string;
  foodLocation: string;
  foodImg: string;
}

interface IStadiumDetails {
  stadiumName: string;
  stadiumLocation: string;
  teamName: string;
  foodList: IFood[];
}

export default function StadiumPage({
  params,
}: {
  params: { stadiumCode: number };
}) {
  const { stadiumCode } = params;
  const [stadiumData, setStadiumData] = useState<IStadiumDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStadiumDetails = async () => {
      try {
        const data = await getStadiumDetails(stadiumCode);
        setStadiumData(data);
      } catch (err) {
        setError('구장 정보를 불러오는 데 실패했습니다.');
      }
    };

    fetchStadiumDetails();
  }, [stadiumCode]);

  if (error) {
    return <Error errorMessage={error} />;
  }

  if (!stadiumData) {
    return (
      <>
        <Header />
        <StadiumSkeleton />
        <Navigation />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="flex flex-col mx-24 pt-10 pb-30 mb-20 gap-8 border-b-1 border-solid border-Gray">
        <div className="flex flex-row gap-6 pl-3 items-center">
          <Image
            src={LocationIcon}
            alt="위치 정보 아이콘"
            width={18}
            height={18}
          />
          <span className="font-normal text-14 text-Gray">
            {stadiumData.stadiumLocation}
          </span>
        </div>

        <h1 className="font-bold text-28 text-SemiBlack items-center">
          {stadiumData.stadiumName}
        </h1>

        <div className="flex flex-row gap-6 items-center pl-4">
          <Image src={HomeIcon} alt="홈 아이콘" width={16} height={16} />
          <span className="font-light text-14 text-DarkGray items-center">
            {stadiumData.teamName}
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-11 mx-24 h-full overflow-y-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-8 items-center">
            <Image src={TriangleIcon} alt="삼각형" width={24} height={24} />
            <span className="font-semibold text-18 text-MainColor">
              {stadiumData.teamName} Best 6
            </span>
          </div>
          <span className="flex px-10 font-light text-12 text-DarkGray items-center">
            각 구장의 대표 먹거리를 찾아보세요!
          </span>
          <span className="flex px-10 font-light text-12 text-DarkGray items-center">
            (이미지는 '자리어때' 에서 제공하는 사진을 사용하였습니다)
          </span>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 max-h-[432px] overflow-y-auto scroll-mb-40">
          {stadiumData.foodList.map((food, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${food.foodImg})`,
              }}
            >
              <Image
                src={food.foodImg}
                alt={`${food.foodName} 이미지`}
                layout="responsive"
                width={160}
                height={160}
                className="object-cover"
              />
              <div className="absolute left-10 bottom-10 flex justify-center items-center rounded-xl">
                <div className="flex flex-col text-White gap-6 ">
                  <p className="font-semibold text-18">{food.foodName}</p>
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={LocationWhiteIcon}
                      alt="위치 아이콘"
                      width={12}
                      height={12}
                    />
                    <span className="font-semibold text-12 text-White">
                      {food.foodLocation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Navigation />
    </>
  );
}
