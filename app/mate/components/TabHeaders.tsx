interface ITabHeadersProps {
  activeTab: string;
  tabs: string[];
  onTabChange: (tab: string) => void;
}

export default function TabHeaders({
  activeTab,
  tabs,
  onTabChange,
}: ITabHeadersProps) {
  return (
    <div className="w-full flex justify-around">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex py-12 text-center text-16 ${
            activeTab === tab
              ? 'border-b-1 border-SemiBlack font-medium text-SemiBlack'
              : 'font-normal text-Gray'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
