import React, { useState } from 'react';
import Image from 'next/image';
import InputButton from '../../public/icons/Input.svg';

interface IMessageProps {
  onSendMessage: (message: {
    content: string;
    sender: string;
    timestamp: string;
  }) => void;
}

export default function Message({ onSendMessage }: IMessageProps) {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
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
    <div className="flex bg-SemiWhite fixed bottom-54 left-0 px-13 py-8 w-full items-center gap-10">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        // onKeyDown={handleKeyDown} // 엔터 키 입력 처리
        placeholder="메시지를 입력하세요"
        className="w-full rounded-xl px-8 py-8 font-normal text-SemiBlack text-14 placeholder:text-Gray outline-none focus:border-MainColor"
      />
      <button onClick={handleSubmit}>
        <Image src={InputButton} alt="채팅 전송 버튼" width={28} height={28} />
      </button>
    </div>
  );
}
