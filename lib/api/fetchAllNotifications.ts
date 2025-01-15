import { notificationsAtom } from '@/recoil/notificationsAtom';
import { useRecoilState } from 'recoil';

export interface INotification {
  requestID: string;
  title: string;
  nickName: string;
  applicantInfo: {
    age: number;
    gender: string;
    team: string;
    introduction: string;
    profileImg: string;
  };
}

export interface IMateInfo {
  isOwner: boolean;
  mateId: string;
  title: string;
  content: string;
  daysSinceWritten: number;
  daysUntilGame: number;
  confirmedMembers: number;
  updatedAt: string;
  options: {
    gender: string;
    age: string;
    date: string;
    team: string;
    member: number;
    stadium: string;
  };
}

export interface IAllNotificationsResponse {
  notification: INotification[];
  pending: IMateInfo[];
  accepted: IMateInfo[];
  rejected: IMateInfo[];
}

export const fetchAllNotifications =
  async (): Promise<IAllNotificationsResponse> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/notifications/all`,
        {
          credentials: 'include',
        },
      );
      const data = await response.json();
      if (data.isSuccess) {
        return data.payload;
      } else {
        throw new Error('전체 매칭 정보를 불러오는데 실패했습니다');
      }
    } catch (error) {
      console.error(error);
      throw new Error('전체 매칭 정보 불러오는데 오류가 발생했습니다');
    }
  };
