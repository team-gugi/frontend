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

  // 메시지 전송 처리 함수
  const handleSendMessage = async (newMessage: {
    content: string;
    sender: string;
    timestamp: string;
  }) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      // 백엔드에 사용자 메시지 전송하고 응답 받기
      const botResponse = await sendChatMessage(newMessage.content);
      const botMessage = {
        content: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleString(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
    }
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
