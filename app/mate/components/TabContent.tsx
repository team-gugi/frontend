import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

interface IFilters {
  gender?: string | null;
  age?: string | null;
  date?: string | null;
  team?: string | null;
  member?: number | null;
  stadium?: string | null;
}

interface ITabContentProps {
  activeTab: string;
  filters: IFilters;
  onUpdateFilter: (key: keyof IFilters, value: any) => void;
}
export type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

export default function TabContent({
  activeTab,
  filters,
  onUpdateFilter,
}: ITabContentProps) {
  const handleChange = (key: keyof IFilters, value: any) => {
    onUpdateFilter(key, value);
  };

  useEffect(() => {
    console.log('Current filters:', filters);
  }, [filters]); // filters가 변경될 때마다 출력

  const [personCount, setPersonCount] = useState<number>(filters.member || 1);

  // const [personCount, setPersonCount] = useState<number>(filters.member ?? 1);
  const handlePersonCountChange = (operation: 'increase' | 'decrease') => {
    setPersonCount((prevCount) => {
      const newCount =
        operation === 'increase' ? prevCount + 1 : Math.max(prevCount - 1, 1);
      onUpdateFilter('member', newCount); // 부모 컴포넌트로 업데이트
      return newCount;
    });
  };

  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());
  // 날짜가 변경될 때마다 필터를 업데이트
  const handleDateChange = (date: SelectedDate) => {
    const formattedDate =
      date && !Array.isArray(date) ? moment(date).format('YYYY-MM-DD') : null;
    if (formattedDate) {
      onUpdateFilter('date', formattedDate);
    }
  };

  switch (activeTab) {
    case '성별/연령':
      return (
        <div className="flex flex-col gap-40">
          <div className="flex flex-col gap-20 px-8">
            <p className="text-16 font-semibold text-SemiBlack">
              👥 함께할 분의 성별을 선택해주세요!
            </p>
            <div className="flex flex-row gap-15">
              {['여자만', '남자만', '상관없음'].map((gender) => (
                <button
                  key={gender}
                  onClick={() => onUpdateFilter('gender', gender)}
                  className={`px-24 py-12 rounded-lg ${
                    filters.gender === gender
                      ? 'bg-White text-14 text-SemiBlack font-medium border-1 border-MainColor'
                      : 'bg-SemiWhite text-14 text-SemiBlack font-normal'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-20 px-8">
            <p className="text-16 font-semibold text-SemiBlack">
              👥 함께할 분의 연령대를 선택해주세요!
            </p>
            <div className="flex flex-col gap-20">
              {['10대', '20대', '30대'].map((age) => (
                <label
                  key={age}
                  className={`flex items-center gap-10 font-medium text-16 cursor-pointer ${
                    filters.age === age ? 'text-MainColor' : 'text-SemiBlack'
                  }`}
                >
                  <input
                    type="radio"
                    name="age"
                    value={age}
                    checked={filters.age === age}
                    onChange={() => onUpdateFilter('age', age)}
                    className="appearance-none w-20 h-20 border-4 border-BlockColor rounded-full checked:border-MainColor transition-all transform hover:scale-110"
                  />
                  {age}
                </label>
              ))}
            </div>
          </div>
        </div>
      );
    case '직관일자':
      return (
        <div className="flex flex-col gap-20 px-8 ">
          {/* <p className="text-16 font-semibold text-SemiBlack">
            🤔 언제 갈까요?
          </p> */}
          <div className="flex justify-center items-center mb-20 pb-60">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              locale="ko-KR"
              calendarType="gregory"
              view="month"
              formatDay={(locale, date) => moment(date).format('DD')}
              next2Label={null}
              prev2Label={null}
            />
          </div>
        </div>
      );
    case '응원팀':
      return (
        <div className="flex flex-col gap-20 px-8">
          <p className="text-16 font-semibold text-SemiBlack">
            🤔 응원하는 팀을 선택하세요
          </p>
          <div className="flex flex-wrap">
            {[
              'KIA 타이거즈',
              'KT 위즈',
              'LG 트윈스',
              'NC 다이노스',
              'SSG 랜더스',
              '두산 베어스',
              '롯데 자이언츠',
              '삼성 라이온즈',
              '키움 히어로즈',
              '한화 이글스',
              '없음',
            ].map((team) => (
              <label
                key={team}
                className={`flex items-center gap-10 w-1/2 my-14 font-semibold text-16 cursor-pointer ${
                  filters.team === team ? 'text-MainColor' : 'text-SemiBlack'
                }`}
              >
                <input
                  type="radio"
                  name="team"
                  value={team}
                  checked={filters.team === team}
                  onChange={() => onUpdateFilter('team', team)}
                  className="appearance-none w-20 h-20 border-4 border-BlockColor rounded-full checked:border-MainColor transition-all transform hover:scale-110"
                />
                {team}
              </label>
            ))}
          </div>
        </div>
      );
    case '모집인원':
      return (
        <div className="flex flex-col gap-20 px-8">
          <p className="text-16 font-semibold text-SemiBlack">
            🤔 선호하는 인원 수를 선택하세요!
          </p>
          <div className="flex justify-between items-center py-14">
            <span className="font-normal text-18 text-SemiBlack">
              모집 인원
            </span>
            <div className="flex items-center justify-center gap-14">
              <button
                onClick={() => handlePersonCountChange('decrease')}
                className="px-16 py-12 bg-BlockColor rounded-[42px] font-semibold text-Gray text-24"
              >
                -
              </button>
              <p className="text-16 font-medium">{personCount}명</p>
              <button
                onClick={() => handlePersonCountChange('increase')}
                className="px-16 py-12 bg-BlockColor rounded-[42px] font-semibold text-Gray text-24"
              >
                +
              </button>
            </div>
          </div>
        </div>
      );
    case '구장':
      return (
        <div className="flex flex-col gap-20 px-8">
          <p className="text-16 font-semibold text-SemiBlack">
            🏟️ 직관할 구장을 선택해주세요
          </p>
          <select
            value={filters.stadium || ''}
            onChange={(e) => onUpdateFilter('stadium', e.target.value)}
            className="px-8 py-12 rounded-lg bg-SemiWhite font-medium text-SemiBlack text-16"
          >
            <option value="">구장을 선택하세요</option>
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
      );
    default:
      return null;
  }
}
