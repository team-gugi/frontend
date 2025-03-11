import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
interface IMessage {
  content: string;
  sender: string;
  timestamp: string;
}
interface IMessageListProps {
  messages: { content: string; sender: string; timestamp: string }[];
}
const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 1월은 0부터 시작하므로 +1을 해줘야 합니다.
  const day = date.getDate().toString().padStart(2, '0');
  //   return `${year}. ${month}. ${day}`;
  return `${year}년 ${month}월 ${day}일`;
};

export default function MessageList({
  messages: initialMessages,
}: IMessageListProps) {
  // export default function MessageList({ messages }: IMessageListProps) {
  const currentDate = getCurrentDate();

  const [messages, setMessages] = useState<IMessage[]>(initialMessages);

  const messageEndRef = useRef<HTMLDivElement | null>(null); // 스크롤 끝 참조용
  const messagesContainerRef = useRef<HTMLDivElement | null>(null); // 메시지 목록 참조용
  const [isAtBottom, setIsAtBottom] = useState(true); // 스크롤이 하단에 있는지 체크

  // 웰컴 메시지 추가
  useEffect(() => {
    const welcomeMessage: IMessage = {
      content: '안녕! 어떤 야구 용어가 궁금해? 👀',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages([welcomeMessage, ...initialMessages]);
  }, [initialMessages]);

  // 스크롤 이벤트 리스너
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } =
        messagesContainerRef.current;

      // 스크롤이 하단에 있으면 isAtBottom을 true로 설정
      if (scrollHeight - scrollTop === clientHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    }
  };

  // 메시지가 추가될 때 스크롤을 하단으로 이동
  useEffect(() => {
    if (isAtBottom && messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAtBottom]); // 메시지가 업데이트되거나 isAtBottom이 변경될 때마다 실행

  // 스크롤 이벤트 추가
  useEffect(() => {
    const messageContainer = messagesContainerRef.current;
    if (messageContainer) {
      messageContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (messageContainer) {
        messageContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // 메시지 내용 \n 기준으로 분리하여 하나씩 보여주기
  const splitMessages = (
    content: string,
  ): { content: string; sender: string; timestamp: string; key: string }[] => {
    return content.split('\n\n').map((line, index) => ({
      content: line,
      sender: 'bot',
      timestamp: new Date().toLocaleString(),
      key: `${content}-${index}`, // 유니크 키로 구분
    }));
  };

  return (
    <div
      className="flex flex-col gap-24 px-20 mb-100"
      ref={messagesContainerRef}
    >
      <div className="text-12 font-light text-Gray text-center py-10">
        {currentDate}
      </div>

      {messages.map((msg, index) =>
        // splitMessages를 사용하여 개별 줄로 나눈 메시지를 렌더링
        splitMessages(msg.content).map((part, idx) => (
          <Message
            key={part.key} // 유니크 키로 구분
            content={part.content} // 메시지의 각 줄을 content로 전달
            sender={msg.sender}
            timestamp={msg.timestamp}
            isFirstMessage={idx === 0} // 첫 번째 메시지일 때만 챗봇 이미지와 닉네임 표시
          />
        )),
      )}
      <div ref={messageEndRef}></div>
    </div>
  );

  // return (
  //   <div className="flex flex-col gap-24 px-20 mb-100">
  //     <div className="text-12 font-light text-Gray text-center py-10">
  //       {currentDate}
  //     </div>
  //     {messages.map((msg, index) => (
  //       <Message
  //         key={index}
  //         content={msg.content}
  //         sender={msg.sender}
  //         timestamp={msg.timestamp}
  //       />
  //     ))}
  //     <div ref={messageEndRef}></div>
  //   </div>
  // );
}
