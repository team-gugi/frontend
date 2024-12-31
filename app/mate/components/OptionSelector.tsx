interface IOptionSelectorProps {
  options: {
    gender: string | null;
    age: string | null;
    date: string | null;
    team: string | null;
    member: number | null;
    stadium: string | null;
  };
  onOpenBottomSheet: () => void;
  onBlur?: () => void;
}

export default function OptionSelector({
  options,
  onOpenBottomSheet,
  onBlur,
}: IOptionSelectorProps) {
  const optionLabels = [
    options.gender || '성별',
    options.age || '연령',
    options.date || '직관일자',
    options.team || '응원팀',
    options.member ? `${options.member}명` : '모집인원',
    options.stadium || '구장',
  ];

  return (
    <div className="flex overflow-x-auto gap-10" onClick={onOpenBottomSheet}>
      {optionLabels.map((label, index) => (
        <button
          key={index}
          type="button"
          className="px-14 py-8 border border-LightGray text-SemiBlack text-16 font-normal whitespace-nowrap"
          style={{ borderRadius: '30px' }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
