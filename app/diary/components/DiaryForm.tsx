import { useState } from 'react';

interface IDiaryFormProps {
  buttonText: string;
  initialData?: {
    date: string;
    stadium: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: string;
    awayScore: string;
    photo?: string;
    content: string;
  };
}

export default function DiaryForm({
  buttonText,
  initialData,
}: IDiaryFormProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // 파일 선택 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedImage(file);
    }
  };
  return (
    <>
      <div className="flex flex-col px-24 py-14 gap-24 mb-100">
        <div className="flex flex-col gap-8">
          <label
            htmlFor="date"
            className="block text-16 font-semibold text-SemiBlack"
          >
            경기 일자
          </label>
          <input
            required
            id="date"
            type="date"
            defaultValue={initialData?.date}
            // placeholder="날짜를 선택하세요"
            className="border-1 border-solid borer-Gray rounded-xl px-15 py-8 focus:outline-none focus:border-MainColor"
          />
        </div>

        <div className="flex flex-col gap-8">
          <label
            htmlFor="stadium"
            className="block text-16 font-semibold text-SemiBlack"
          >
            구장
          </label>
          <select
            id="stadium"
            className="border-1 border-solid border-Gray rounded-xl px-15 py-8 focus:outline-none focus:border-MainColor"
          >
            <option value="" className="text-Gray">
              {/* 구장을 선택하세요 */}
              {initialData?.stadium}
            </option>
            <option value="stadium1">고척 스카이돔</option>
            <option value="stadium2">광주 기아 챔피언스 필드</option>
            <option value="stadium3">대구 삼성 라이온즈 파크</option>
            <option value="stadium4">대전 한화생명 이글스 파크</option>
            <option value="stadium5">부산 사직 야구장</option>
            <option value="stadium6">수원 KT 위즈 파크</option>
            <option value="stadium7">인천 SSG 랜더스필드</option>
            <option value="stadium8">잠실 야구장</option>
            <option value="stadium9">창원 NC 파크</option>
          </select>
        </div>

        <div className="flex flex-col gap-8">
          <label
            htmlFor=""
            className="block text-16 font-semibold text-SemiBlack"
          >
            팀을 선택하세요
          </label>
          <div className="flex flex-row items-center gap-10 w-full">
            <select
              id="homeTeam"
              className="border-1 border-solid border-Gray rounded-xl px-15 py-8 focus:outline-none focus:border-MainColor w-full"
            >
              <option value="" className="text-Gray">
                응원팀
              </option>
              <option value="stadium1">키움 히어로즈</option>
              <option value="stadium2">KIA 타이거즈</option>
              <option value="stadium3">삼성 라이온즈</option>
              <option value="stadium4">한화 이글스</option>
              <option value="stadium5">롯데 자이언츠</option>
              <option value="stadium6">KT 위즈</option>
              <option value="stadium7">SSG 랜더스</option>
              <option value="stadium8">LG 트윈스</option>
              <option value="stadium9">두산 베어스</option>
              <option value="stadium10">NC 다이노스</option>
            </select>
            <span className="text-16 font-normal text-Gray">VS</span>
            <select
              id="awayTeam"
              className="border-1 border-solid border-Gray rounded-xl px-15 py-8 focus:outline-none focus:border-MainColor w-full "
            >
              <option value="" className="text-Gray">
                상대팀
              </option>
              <option value="stadium1">키움 히어로즈</option>
              <option value="stadium2">KIA 타이거즈</option>
              <option value="stadium3">삼성 라이온즈</option>
              <option value="stadium4">한화 이글스</option>
              <option value="stadium5">롯데 자이언츠</option>
              <option value="stadium6">KT 위즈</option>
              <option value="stadium7">SSG 랜더스</option>
              <option value="stadium8">LG 트윈스</option>
              <option value="stadium9">두산 베어스</option>
              <option value="stadium10">NC 다이노스</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <label
            htmlFor=""
            className="block text-16 font-semibold text-SemiBlack"
          >
            경기 스코어를 입력하세요
          </label>

          <div className="flex flex-row items-center gap-10 w-full">
            <input
              id="homeScore"
              placeholder="응원팀 점수"
              defaultValue={initialData?.homeScore}
              className="border-1 border-solid border-Gray rounded-xl px-15 py-8 focus:outline-none focus:border-MainColor w-full"
            />
            <span className="text-16 font-normal text-Gray">VS</span>
            <input
              id="awayScore"
              placeholder="상대팀 점수"
              defaultValue={initialData?.awayScore}
              className="border-1 border-solid border-Gray rounded-xl px-15 py-8 focus:outline-none focus:border-MainColor w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <label
            htmlFor="image-upload"
            className="block text-16 font-semibold text-SemiBlack"
          >
            사진 첨부
          </label>
          <input
            required
            id="image-upload"
            type="file"
            accept="image/*"
            // defaultValue={initialData?.}
            onChange={handleImageChange}
            className=" text-white px-4 py-2 rounded-lg transition-colors"
          />
          {selectedImage ? (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Preview"
                className="w-100 h-100 object-cover"
              />
            </div>
          ) : (
            <div className="mt-4 w-[100px] h-[100px] bg-SemiWhite flex items-center justify-center">
              <span className="text-SemiBlack">+</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <label
            htmlFor="content"
            className="block text-16 font-semibold text-SemiBlack"
          >
            일기 작성
          </label>
          <textarea
            id="content"
            placeholder="오늘의 직관 일기를 작성해주세요 최대 n자"
            defaultValue={initialData?.content}
            // rows={4}
            className="text-18 font-normal border-b-1 border-solid borer-Gray py-8 leading-[140%] min-h-[170px] focus:outline-none focus:border-MainColor"
          />
        </div>

        <button className="flex items-center justify-center px-74 py-16 rounded-xl bg-MainColor text-18 font-light text-White">
          {buttonText}
        </button>
      </div>
    </>
  );
}
