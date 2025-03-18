import Image from 'next/image';
import Character from '../../public/icons/직관일기임시캐릭터.png';
interface IMessageProps {
  content: string;
  sender: string; // 보내는 사람 ('user' 또는 'bot')
  timestamp: string; // 타임스탬프
  isFirstMessage: boolean; // 첫 번째 메시지인지 여부
}

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0'); // 시
  const minutes = date.getMinutes().toString().padStart(2, '0'); // 분
  return `${hours}:${minutes}`;
};

export default function Message({
  content,
  sender,
  timestamp,
  isFirstMessage,
}: IMessageProps) {
  const time = getCurrentTime();
  return (
    <div
      className={`flex gap-4 ${sender === 'user' ? 'justify-end' : 'justify-start'} `}
    >
      {/* Bot 메시지 */}
      {/* {sender === 'bot' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-8">
            <Image
              src={Character}
              alt="챗봇 이미지"
              width={40}
              height={40}
              style={{ borderRadius: '50%', border: '1px solid #ccc' }}
            />
            <span className="font-medium text-14 text-SemiBlack">AI 구기</span>
          </div>
          <div className="flex ml-40 items-end gap-4">
            <div className="rounded-xl bg-SemiWhite px-16 py-10">
              <p className="text-16 font-normal text-SemiBlack break-words leading-[150%]">
                {content}
              </p>
            </div>
            <span className="block text-12 font-light text-Gray">{time}</span>
          </div>
        </div>
      )} */}

      {/* Bot 메시지 */}
      {sender === 'bot' && (
        <div className="flex flex-col">
          {/* 첫 번째 메시지일 때만 챗봇 이미지와 닉네임을 렌더링 */}
          {isFirstMessage && (
            <div className="flex items-center gap-8">
              <Image
                src={Character}
                alt="챗봇 이미지"
                width={40}
                height={40}
                style={{ borderRadius: '50%', border: '1px solid #ccc' }}
              />
              <span className="font-medium text-14 text-SemiBlack">
                AI 구기
              </span>
            </div>
          )}
          <div className="flex ml-40 items-end gap-4">
            <div className="rounded-xl bg-SemiWhite px-16 py-10">
              <p className="text-16 font-normal text-SemiBlack break-words leading-[150%]">
                {content}
              </p>
            </div>
            <span className="block text-12 font-light text-Gray">{time}</span>
          </div>
        </div>
      )}

      {/* User 메시지 */}
      {sender === 'user' && (
        <div className="flex justify-end items-end gap-4">
          <span className="block text-12 font-light text-Gray">{time}</span>
          <div className="rounded-xl bg-MainColor px-16 py-10">
            <p className="text-16 font-normal text-SemiWhite break-words leading-[150%]">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
