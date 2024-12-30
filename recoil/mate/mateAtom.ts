import { atom } from 'recoil';

interface IMateFormState {
  title: string;
  options: string[];
  content: string;
  contact: string;
}

export const mateFormState = atom<IMateFormState>({
  key: 'mateFormState',
  default: {
    title: '',
    options: [],
    content: '',
    contact: '',
  },
});
