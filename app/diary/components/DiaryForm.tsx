import { IDiaryInfo } from '@/lib/api/createDiaryApi';
import { useState } from 'react';

interface IDiaryFormProps {
  buttonText: string;
  initialData?: {
    gameDate: string;
    gameStadium: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: string;
    awayScore: string;
    gameImg?: string;
    content: string;
  };
  onSubmit: (diaryInfo: IDiaryInfo, gameImg: File | null) => void;
}

export default function DiaryForm({
  buttonText,
  initialData,
  onSubmit,
}: IDiaryFormProps) {
  const [gameDate, setGameDate] = useState(initialData?.gameDate || '');
  const [gameStadium, setGameStadium] = useState(
    initialData?.gameStadium || '',
  );
  const [homeTeam, setHomeTeam] = useState(initialData?.homeTeam || '');
  const [awayTeam, setAwayTeam] = useState(initialData?.awayTeam || '');
  // const [homeScore, setHomeScore] = useState<number>(
  //   initialData?.homeScore || 0,
  // );
  // const [awayScore, setAwayScore] = useState<number>(
  //   initialData?.awayScore || 0,
  // );
  // const [homeScore, setHomeScore] = useState<number>(
  //   typeof initialData?.homeScore === 'number' ? initialData.homeScore : 0,
  // );
  // const [awayScore, setAwayScore] = useState<number>(
  //   typeof initialData?.awayScore === 'number' ? initialData.awayScore : 0,
  // );
  const [homeScore, setHomeScore] = useState(initialData?.homeScore || '');
  const [awayScore, setAwayScore] = useState(initialData?.awayScore || '');

  const [content, setContent] = useState(initialData?.content || '');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const diaryInfo = {
      gameDate,
      gameStadium,
      homeTeam,
      awayTeam,
      homeScore: parseInt(homeScore),
      awayScore: parseInt(awayScore),
      content,
    };
    console.log('diaryInfo', diaryInfo);
    console.log('gameImg', selectedImage);

    onSubmit(diaryInfo, selectedImage);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-24 py-14 gap-24 mb-100"
    >
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
          value={gameDate}
          onChange={(e) => setGameDate(e.target.value)}
          className="border-1 border-solid border-Gray rounded-xl px-15 py-8 focus:outline-none focus:border-MainColor"
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
          value={gameStadium}
          onChange={(e) => setGameStadium(e.target.value)}
          className="border-1 border-solid border-Gray rounded-xl px-14 py-8 focus:outline-none focus:border-MainColor"
        >
          <option>구장을 선택하세요</option>
          <option value="고척 스카이돔">고척 스카이돔</option>
          <option value="광주 기아 챔피언스 필드">
            광주 기아 챔피언스 필드
          </option>
          <option value="대구 삼성 라이온즈 파크">
            대구 삼성 라이온즈 파크
          </option>
          <option value="대전 한화생명 이글스파크">
            대전 한화생명 이글스파크
          </option>
          <option value="부산 사직 야구장">부산 사직 야구장</option>
          <option value="수원 KT 위즈 파크">수원 KT 위즈 파크</option>
          <option value="인천 SSG 랜더스필드">인천 SSG 랜더스필드</option>
          <option value="잠실 야구장">잠실 야구장</option>
          <option value="창원 NC 파크">창원 NC 파크</option>
        </select>
      </div>

      <div className="flex flex-col gap-8">
        <label
          htmlFor="homeTeam"
          className="block text-16 font-semibold text-SemiBlack"
        >
          응원팀
        </label>
        <div className="flex flex-row items-center gap-10 w-full">
          <select
            id="homeTeam"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
            className="border-1 border-solid border-Gray rounded-xl px-14 py-8 focus:outline-none focus:border-MainColor w-full"
          >
            <option className="text-Gray">응원팀</option>
            <option value="키움 히어로즈">키움 히어로즈</option>
            <option value="KIA 타이거즈">KIA 타이거즈</option>
            <option value="한화 이글스">한화 이글스</option>
            <option value="삼성 라이온즈">삼성 라이온즈</option>
            <option value="롯데 자이언츠">롯데 자이언츠</option>
            <option value="KT 위즈">KT 위즈</option>
            <option value="SSG 랜더스">SSG 랜더스</option>
            <option value="LG 트윈스">LG 트윈스</option>
            <option value="두산 베어스">두산 베어스</option>
            <option value="NC 다이노스">NC 다이노스</option>
          </select>
          <span className="text-16 font-normal text-Gray">VS</span>
          <select
            id="awayTeam"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
            className="border-1 border-solid border-Gray rounded-xl px-14 py-8 focus:outline-none focus:border-MainColor w-full "
          >
            <option className="text-Gray">상대팀</option>
            <option value="키움 히어로즈">키움 히어로즈</option>
            <option value="KIA 타이거즈">KIA 타이거즈</option>
            <option value="한화 이글스">한화 이글스</option>
            <option value="삼성 라이온즈">삼성 라이온즈</option>
            <option value="롯데 자이언츠">롯데 자이언츠</option>
            <option value="KT 위즈">KT 위즈</option>
            <option value="SSG 랜더스">SSG 랜더스</option>
            <option value="LG 트윈스">LG 트윈스</option>
            <option value="두산 베어스">두산 베어스</option>
            <option value="NC 다이노스">NC 다이노스</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <label
          htmlFor="homeScore"
          className="block text-16 font-semibold text-SemiBlack"
        >
          경기 스코어를 입력하세요
        </label>
        <div className="flex flex-row items-center gap-10 w-full">
          <input
            id="homeScore"
            type="number"
            placeholder="응원팀 점수"
            value={homeScore}
            // onChange={(e) => setHomeScore(Number(e.target.value))}
            onChange={(e) => setHomeScore(e.target.value)}
            className="border-1 border-solid border-Gray rounded-xl px-14 py-8 focus:outline-none focus:border-MainColor w-full"
          />
          <span className="text-16 font-normal text-Gray">VS</span>
          <input
            id="awayScore"
            type="number"
            placeholder="상대팀 점수"
            value={awayScore}
            onChange={(e) => setAwayScore(e.target.value)}
            // onChange={(e) => setAwayScore(Number(e.target.value))}
            className="border-1 border-solid border-Gray rounded-xl px-14 py-8 focus:outline-none focus:border-MainColor w-full"
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
          placeholder="오늘의 직관 일기를 작성해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-18 font-normal border-b-1 border-solid border-Gray py-8 leading-[140%] min-h-[170px] focus:outline-none focus:border-MainColor"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center px-74 py-16 rounded-xl bg-MainColor text-18 font-light text-White"
      >
        {buttonText}
      </button>
    </form>
  );
}
