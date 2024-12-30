import React from 'react';

interface IOptionSelectorProps {
  //   options: {
  //     gender: string;
  //     age: string;
  //     date: string;
  //     team: string;
  //     memberCount: string;
  //   };
  options: string[];
  onOpenBottomSheet: () => void;
}

export default function OptionSelector({
  options,
  onOpenBottomSheet,
}: IOptionSelectorProps) {
  //   const optionLabels = [
  //     { label: options.gender || '성별' },
  //     { label: options.age || '연령' },
  //     { label: options.date || '직관일자' },
  //     { label: options.team || '응원팀' },
  //     { label: options.memberCount || '모집인원' },
  //   ];

  return (
    <div className="flex overflow-x-auto gap-10" onClick={onOpenBottomSheet}>
      {/* {optionLabels.map((option, index) => ( */}
      {options.map((label, index) => (
        <button
          key={index}
          type="button"
          onClick={onOpenBottomSheet}
          className="px-14 py-8 border border-LightGray text-SemiBlack text-16 font-normal whitespace-nowrap"
          style={{ borderRadius: '30px' }}
        >
          {/* {option.label} */}
          {label}
        </button>
      ))}
    </div>
  );
}
