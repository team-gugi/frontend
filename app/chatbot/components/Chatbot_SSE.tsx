'use client';
import React, { useEffect, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function Chatbot() {
  // 메시지 상태
  const [messages, setMessages] = useState<
    { content: string; sender: string; timestamp: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // 에러 상태
  useEffect(() => {
    //SSE로 백엔드와 실시간 연결
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/chat`,
    ); //SSE endpoint

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: data.message,
          sender: data.sender,
          timestamp: new Date().toLocaleString(),
        },
      ]);
    };

    return () => {
      eventSource.close(); // 컴포넌트 언마운트 시 SSE 연결 종료
    };
  }, []);

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
        {/* <MessageList messages={messages} /> */}
        <MessageList messages={messages} isLoading={isLoading} error={error} />
      </div>
      <div className="">
        {/* MessageInput에 메시지 전송 함수 전달 */}
        {/* <MessageInput onSendMessage={handleSendMessage} /> */}
        <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
