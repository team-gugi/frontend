'use client';

import { useMateForm } from '@/hooks/useMateForm';
import TextInput from '../components/TextInput';
import OptionSelector from './OptionSelector';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import BottomSheet from './BottomSheet';

export default function MateForm() {
  const { formState, handleInputChange, handleOptionSelect } = useMateForm();
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const openBottomSheet = () => setBottomSheetOpen(true);
  const closeBottomSheet = () => setBottomSheetOpen(false);

  const handleSubmit = () => {
    console.log('폼 제출:', formState);
  };
  return (
    <>
      <div className="flex flex-col px-24 py-14 gap-34">
        <TextInput
          label="제목"
          placeholder="제목을 입력해 주세요."
          value={formState.title}
          onChange={handleInputChange}
          name="title"
        />

        <div className="flex flex-col gap-16">
          <label className="text-16 font-semibold text-left flex items-center">
            매칭 옵션
          </label>
          <OptionSelector
            options={['성별', '연령', '직관일자', '응원팀', '모집인원']}
            //   selectedOptions={formState.options}
            //   onSelect={handleOptionSelect}
            onOpenBottomSheet={openBottomSheet}
            // onOpenBottomSheet={() => console.log('옵션 바텀시트 열기')}
          />
        </div>

        <TextInput
          label="내용"
          placeholder="내용을 작성해 주세요."
          value={formState.content}
          onChange={handleInputChange}
          name="content"
          multiline={true}
        />

        <TextInput
          label="연락 수단"
          placeholder="ex. 오픈카톡 링크, 카카오톡 아이디)"
          value={formState.contact}
          onChange={handleInputChange}
          name="contact"
        />

        <SubmitButton onClick={handleSubmit} label="등록하기" />
      </div>
      {isBottomSheetOpen && (
        <BottomSheet
          onClose={closeBottomSheet}
          onApply={() => {
            console.log('ㅇㅇ');
          }}
        />
      )}
    </>
  );
}
