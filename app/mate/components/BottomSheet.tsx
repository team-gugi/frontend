import { useState } from 'react';
import TabHeaders from './TabHeaders';
import TabContent from './TabContent';
import BottomButtons from './BottomButtons';

interface IBottomSheetProps {
  onClose: () => void;
  onApply: (filters: any) => void;
}

interface IFilters {
  gender?: string | null;
  age?: string | null;
  date?: string | null;
  team?: string | null;
  member?: number;
  stadium?: string | null;
}

export default function BottomSheet({ onClose, onApply }: IBottomSheetProps) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleSheetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const [activeTab, setActiveTab] = useState<string>('성별/연령');

  const [filters, setFilters] = useState<IFilters>({
    gender: null,
    age: null,
    date: null,
    team: null,
    member: 1,
    stadium: null,
  });

  const updateFilter = (key: string, value: any) => {
    // 상태 업데이트를 이곳에서 비동기적으로 처리
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  // const updateFilter = (key: keyof IFilters, value: any) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [key]: value,
  //   }));
  // };

  const handleReset = () => {
    setFilters({
      gender: null,
      age: null,
      date: null,
      team: null,
      member: 1,
      stadium: null,
    });
  };

  const handleApply = () => {
    // 필터를 부모 컴포넌트로 전달하고 BottomSheet 닫기
    onApply(filters);
    onClose();
    console.log('selected filters on BottomSheet : ', filters);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-end"
        onClick={handleOverlayClick}
      >
        {/* 어둡게 처리된 배경 */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="flex flex-col fixed min-h-[523px] bottom-0 left-0 w-full px-24 pt-20 pb-40 gap-23 rounded-tl-2xl rounded-tr-2xl bg-White"
          onClick={handleSheetClick}
        >
          <div
            className="mx-auto mb-4 rounded-full"
            style={{
              width: '15vw',
              maxWidth: '72px',
              height: '0.5vh',
              maxHeight: '4.5px',
              backgroundColor: '#C9D0DA',
            }}
          ></div>

          <TabHeaders
            activeTab={activeTab}
            tabs={['성별/연령', '직관일자', '응원팀', '모집인원', '구장']}
            onTabChange={setActiveTab}
          />

          {/* 필터가 바뀔 때마다 상태 업데이트 */}
          <TabContent
            activeTab={activeTab}
            filters={filters}
            onUpdateFilter={updateFilter}
          />

          <BottomButtons onReset={handleReset} onApply={handleApply} />
        </div>
      </div>
    </>
  );
}
