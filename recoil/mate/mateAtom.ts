import { atom } from 'recoil';

interface IMateFormState {
  title: string;
  options: string[];
  content: string;
  contact: string;
}

interface ISelectedOptionState {
  date: string;
  gender: string;
  age: string;
  team: string;
  stadium: string;
  member: number;
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

export const selectedOptionState = atom<ISelectedOptionState>({
  key: 'selectedOptionState',
  default: {
    date: '',
    gender: '',
    age: '',
    team: '',
    stadium: '',
    member: 1,
  },
});
