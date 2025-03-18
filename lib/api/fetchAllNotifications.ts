import { notificationsAtom } from '@/recoil/notificationsAtom';
import { useRecoilState } from 'recoil';

export interface INotification {
  requestId: string;
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
  contact: string;
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
// export const fetchAllNotifications =
//   async (): Promise<IAllNotificationsResponse> => {
//     // 목업 데이터 생성
//     const mockData: IAllNotificationsResponse = {
//       notification: [],
//       pending: [],
//       accepted: [
//         {
//           isOwner: false,
//           mateId: 'mate-001',
//           title: '이번 주말 축구 같이 하실 분!',
//           content: '일요일 오후 3시에 경기가 있습니다. 함께 해요!',
//           daysSinceWritten: 2,
//           daysUntilGame: 5,
//           confirmedMembers: 3,
//           updatedAt: '2025-03-16T12:00:00Z',
//           contact: 'chldbswl@example.com',
//           options: {
//             gender: '여성',
//             age: '20대',
//             date: '2025-03-21',
//             team: '삼성',
//             member: 5,
//             stadium: '대구 삼성 라이온즈 파크',
//           },
//         },
//       ],
//       rejected: [],
//     };

//     return mockData;
//   };
