'use client';

import { useState } from 'react';
import Image from 'next/image';

import LogoutIcon from '../../public/icons/Logout.svg';
import SadIcon from '../../public/icons/SadUser.svg';

import AccountModal from './AccountModal';
import AccountMoadal from './AccountModal';
import { userLogout } from '@/lib/api/userLogoutApi';
import { useRouter } from 'next/navigation';
import { userWithdraw } from '@/lib/api/userWithdraw';

export default function Account() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'logout' | 'withdraw' | null>(
    null,
  );

  const handleOpenModal = (type: 'logout' | 'withdraw') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleConfirm = async () => {
    if (modalType === 'logout') {
      const { isSuccess, message } = await userLogout();

      if (isSuccess) {
        alert('로그아웃 성공');
        router.push('/');
      } else {
        alert(`오류: ${message}`);
      }
    } else if (modalType === 'withdraw') {
      const { isSuccess, message } = await userWithdraw();
      if (isSuccess) {
        alert('회원 탈퇴 요청 성공');
        router.push('/');
      } else {
        alert(`오류: ${message}`);
      }
    }
    handleCloseModal();
  };
  return (
    <>
      <div className="flex flex-row gap-80 items-center justify-center py-20 mb-80">
        <button
          className="flex flex-row gap-16"
          onClick={() => handleOpenModal('logout')}
        >
          <Image
            src={LogoutIcon}
            alt="로그아웃 아이콘"
            width={18}
            height={18}
          />
          <span className="text-16 font-light text-Gray">로그아웃</span>
        </button>

        <button
          className="flex flex-row gap-16"
          onClick={() => handleOpenModal('withdraw')}
        >
          <Image src={SadIcon} alt="회원탈퇴 아이콘" width={18} height={18} />
          <span className="text-16 font-light text-Gray">회원 탈퇴</span>
        </button>
      </div>

      {isModalOpen && (
        <AccountMoadal
          type={modalType!} // null 상태가 아니므로 강제 언래핑
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
