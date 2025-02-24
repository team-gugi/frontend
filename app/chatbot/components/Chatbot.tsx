'use client';
import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function Chatbot() {
  // 메시지 상태
  const [messages, setMessages] = useState<
    { content: string; sender: string; timestamp: string }[]
  >([]);

  // 메시지 전송 처리 함수
  const handleSendMessage = (newMessage: {
    content: string;
    sender: string;
    timestamp: string;
  }) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // 챗봇의 응답 처리 (여기서는 간단하게 "챗봇 메시지"를 추가하는 예시)
    setTimeout(() => {
      const botResponse = {
        content: '챗봇의 응답입니다.',
        sender: 'bot',
        timestamp: new Date().toLocaleString(),
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        {/* MessageList에 메시지 배열을 전달 */}
        <MessageList messages={messages} />
      </div>
      <div className="">
        {/* MessageInput에 메시지 전송 함수 전달 */}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
