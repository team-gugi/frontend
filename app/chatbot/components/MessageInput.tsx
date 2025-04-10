import React, { useState } from 'react';
import Image from 'next/image';
import InputButton from '../../public/icons/Input.svg';

interface IMessageProps {
  onSendMessage: (message: {
    content: string;
    sender: string;
    timestamp: string;
  }) => void;
  isDisabled?: boolean; // 비활성화 여부
  isLoading: boolean; // 로딩 상태 추가
}

export default function Message({
  onSendMessage,
  isDisabled,
  isLoading,
}: IMessageProps) {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (isLoading) return; // 로딩 중에는 전송하지 않음
    if (message.trim()) {
      const timestamp = new Date().toLocaleString();
      onSendMessage({ content: message, sender: 'user', timestamp });
      setMessage('');
    }
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     handleSubmit();
  //   }
  // };

  return (
    <div className="flex fixed bottom-58 left-0 px-13 py-8 w-full items-center gap-10  ">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        // disabled={isDisabled} // 로딩 중 비활성화
        disabled={isDisabled || isLoading} // 로딩 중 비활성화
        // onKeyDown={handleKeyDown} // 엔터 키 입력 처리
        placeholder="메시지를 입력하세요"
        className="w-full rounded-xl px-8 py-12 font-normal text-SemiBlack text-14 placeholder:text-Gray outline-[0.5px] outline-MainColor focus:border-MainColor"
      />
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`flex items-center justify-center ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <Image src={InputButton} alt="채팅 전송 버튼" width={28} height={28} />
      </button>
    </div>
  );
}
