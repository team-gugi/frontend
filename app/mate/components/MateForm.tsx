'use client';

import { useMateForm } from '@/hooks/useMateForm';
import TextInput from '../components/TextInput';
import OptionSelector from './OptionSelector';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import BottomSheet from './BottomSheet';
import { createMatePost } from '@/lib/api/postMateApi';
import { useRouter } from 'next/navigation';

export default function MateForm() {
  const { formState, handleInputChange, handleOptionSelect, resetForm } =
    useMateForm();
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const openBottomSheet = () => setBottomSheetOpen(true);
  const closeBottomSheet = () => setBottomSheetOpen(false);

  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태

  const router = useRouter();

  const [selectedOptions, setSelectedOptions] = useState({
    gender: '',
    age: '',
    date: '',
    team: '',
    member: 1,
    stadium: '',
  });

  // 바텀시트에서 선택된 옵션을 업데이트
  const handleApplyOptions = (filters: any) => {
    setSelectedOptions(filters);
  };

  const handleSubmit = async () => {
    // formState와 selectedOptions를 결합하여 하나의 객체로 만듦
    const postData = {
      ...formState,
      options: selectedOptions, // 선택된 옵션을 formState에 추가
    };
    console.log(postData);

    try {
      const response = await createMatePost(postData);
      if (response.isSuccess) {
        alert('게시물이 성공적으로 등록되었습니다!');
        console.log('직관메이트 게시물 등록 성공');
        resetForm(); // 폼 상태 초기화
        setSelectedOptions({
          gender: '',
          age: '',
          date: '',
          team: '',
          member: 1,
          stadium: '',
        }); // 선택된 옵션 초기화
        router.push('/mate');
        console.log('직관메이트 게시물 등록 실패');
        alert('게시물 등록에 실패했습니다.');
      }
    } catch (error: any) {
      console.error('API 호출 오류:', error);
      alert(error.message || '게시물 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <div className="flex flex-col px-24 py-14 gap-34 mb-60 max-h-[520px] overflow-y-auto scroll-mb-40">
        <TextInput
          label="제목"
          placeholder="제목을 입력해 주세요."
          value={formState.title}
          onChange={handleInputChange}
          name="title"
          // onBlur={handleFinalSubmit}
        />

        <div className="flex flex-col gap-16">
          <label className="text-16 font-semibold text-left flex items-center">
            매칭 옵션
          </label>
          <OptionSelector
            options={selectedOptions} // onSelect={handleOptionSelect}
            onOpenBottomSheet={openBottomSheet}
            // onBlur={handleFinalSubmit}
          />
        </div>

        <TextInput
          label="내용"
          placeholder="내용을 작성해 주세요."
          value={formState.content}
          onChange={handleInputChange}
          name="content"
          multiline={true}

          // onBlur={handleFinalSubmit}
        />

        <TextInput
          label="연락 수단"
          placeholder="연락 수단을 알려주세요                                       ex. 오픈카톡 링크, 카카오톡 아이디)"
          value={formState.contact}
          onChange={handleInputChange}
          name="contact"
          multiline={true}
          // onBlur={handleFinalSubmit}
        />

        <SubmitButton onClick={handleSubmit} label="등록하기" />
      </div>
      {isBottomSheetOpen && (
        <BottomSheet
          onClose={closeBottomSheet}
          onApply={handleApplyOptions} // 선택한 옵션 반영
        />
      )}
    </>
  );
}
