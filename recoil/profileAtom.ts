import { atom } from 'recoil';

interface IProfileState {
  nickName: string;
  profileImg: File | null;
  introduction: string;
  team: string;

  accessToken: string | null;
  refreshToken: string | null;
}
export const profileAtom = atom<IProfileState>({
  key: 'profileAtom',
  default: {
    nickName: '',
    profileImg: null,
    introduction: '',
    team: '',

    accessToken: null,
    refreshToken: null,
  },
});
