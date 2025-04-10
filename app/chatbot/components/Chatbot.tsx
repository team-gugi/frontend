'use client';
import React, { useEffect, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { sendChatMessage } from '@/lib/api/chatApi';

export default function Chatbot() {
  // 메시지 상태
  const [messages, setMessages] = useState<
    { content: string; sender: string; timestamp: string }[]
  >([]);

  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  // 메시지 전송 처리 함수
  const handleSendMessage = async (newMessage: {
    content: string;
    sender: string;
    timestamp: string;
  }) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    //   try {
    //     // 백엔드에 사용자 메시지 전송하고 응답 받기
    //     const botResponse = await sendChatMessage(newMessage.content);
    //     const botMessage = {
    //       content: botResponse,
    //       sender: 'bot',
    //       timestamp: new Date().toLocaleString(),
    //     };
    //     setMessages((prevMessages) => [...prevMessages, botMessage]);
    //   } catch (error) {
    //     console.error('Error fetching chat response:', error);
    //   }
    // };

    try {
      setIsLoading(true);
      const botResponse = await sendChatMessage(newMessage.content);
      const botMessage = {
        content: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleString(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setError('응답을 가져오는 중 문제가 발생했습니다.다시 시도해주세요.');
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: '죄송합니다.답변을 불러오지 못했습니다.😥',
          sender: 'bot',
          timestamp: new Date().toLocaleString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        {/* MessageList에 메시지 배열을 전달 */}
        {/* <MessageList messages={messages} /> */}

        {/* MessageList에 메시지 배열과 로딩 상태를 전달 */}
        <MessageList messages={messages} isLoading={isLoading} error={error} />
      </div>
      <div className="">
        {/* MessageInput에 메시지 전송 함수 전달 */}
        <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
