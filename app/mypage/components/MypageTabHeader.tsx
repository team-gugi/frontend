interface ITabHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MypageTabHeader({
  activeTab,
  onTabChange,
}: ITabHeaderProps) {
  const tabs = ['알림함', '매칭대기', '매칭성사', '매칭거절'];

  return (
    <>
      <div className="w-full flex justify-around ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex px-12 py-12 text-center text-17 ${
              activeTab === tab
                ? 'border-b-2 border-SemiBlack font-medium  text-SemiBlack'
                : 'border-b-1 border-SemiWhite font-normal text-Gray'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
}
