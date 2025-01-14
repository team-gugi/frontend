import Image from 'next/image';

import Icon from '../../public/icons/Group 960.png';

export default function ProfileInfo() {
  return (
    <>
      <div className="flex flex-col px-24 py-24 gap-18">
        <div className="flex flex-row items-center gap-12">
          <Image src={Icon} alt="프로필 이미지" width={40} height={40} />

          <p className="text-20 font-medium">
            <span className="text-SemiBlack">김구기</span>{' '}
            <span className="text-MainColor">&gt;</span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-12 font-normal">
            <span className="text-MainColor">김구기</span>님이 응원하는 팀은{' '}
            <span className="text-MainColor">키움 히어로즈</span>입니다.
          </p>
          <p className="text-12 font-normal">
            gugi에서 직관 메이트를 만들어보세요!
          </p>
        </div>
      </div>
    </>
  );
}
