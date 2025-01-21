'use client';

import { useMateForm } from '@/hooks/useMateForm';
import TextInput from '../components/TextInput';
import OptionSelector from './OptionSelector';
import SubmitButton from './SubmitButton';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

import BottomSheet from './BottomSheet';
import { updateMatePost } from '@/lib/api/updateMatePostApi';

export default function MateEditForm() {
  //   const { mateId } = useParams(); // mateId는 URL path에서 추출
  const { mateId } = useParams<{ mateId: string }>();
  const searchParams = useSearchParams(); // URL에서 쿼리 파라미터를 가져옴

  const { formState, handleInputChange, handleOptionSelect, resetForm } =
    useMateForm();
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const openBottomSheet = () => setBottomSheetOpen(true);
  const closeBottomSheet = () => setBottomSheetOpen(false);

  const [selectedOptions, setSelectedOptions] = useState({
    gender: '',
    age: '',
    date: '',
    team: '',
    member: 1,
    stadium: '',
  });

  useEffect(() => {
    // URL 파라미터에서 데이터를 받아서 formState에 설정
    const title = searchParams.get('title') || '';
    const content = searchParams.get('content') || '';
    const contact = searchParams.get('contact') || '';
    const options = {
      gender: searchParams.get('gender') || '',
      age: searchParams.get('age') || '',
      date: searchParams.get('date') || '',
      team: searchParams.get('team') || '',
      member: parseInt(searchParams.get('member') || '1', 10),
      stadium: searchParams.get('stadium') || '',
    };

    //     setFormState({
    //       title,
    //       content,
    //       contact,
    //       options,
    //     });
    //     setSelectedOptions(options); // 선택된 옵션 상태 초기화
    //   }, [searchParams]);
    // 상태 업데이트 함수인 handleInputChange를 사용하여 formState 초기화
    // handleInputChange({ target: { name: 'title', value: title } });
    // handleInputChange({ target: { name: 'content', value: content } });
    // handleInputChange({ target: { name: 'contact', value: contact } });
    handleInputChange({
      target: { name: 'title', value: title },
    } as React.ChangeEvent<HTMLInputElement>);
    handleInputChange({
      target: { name: 'content', value: content },
    } as React.ChangeEvent<HTMLInputElement>);
    handleInputChange({
      target: { name: 'contact', value: contact },
    } as React.ChangeEvent<HTMLInputElement>);

    // selectedOptions 설정
    setSelectedOptions(options);
  }, [searchParams]);

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
    console.log('mateId', mateId);
    console.log('postData', postData);

    try {
      const response = await updateMatePost(mateId, postData); // 수정 API 호출
      if (response && response.isSuccess) {
        alert('게시물이 성공적으로 수정되었습니다!');
        console.log('직관메이트 게시물 수정 성공');
        resetForm(); // 폼 상태 초기화
        setSelectedOptions({
          gender: '',
          age: '',
          date: '',
          team: '',
          member: 1,
          stadium: '',
        }); // 선택된 옵션 초기화
      } else {
        console.log('직관메이트 게시물 수정 실패');
        alert('게시물 수정에 실패했습니다.');
      }
    } catch (error: any) {
      console.error('API 호출 오류:', error);
      alert(error.message || '게시물 수정 중 오류가 발생했습니다.');
    }
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

        <SubmitButton onClick={handleSubmit} label="수정하기" />
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
