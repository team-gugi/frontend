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
// interface IFilters {
//   gender?: string | null;
//   age?: string | null;
//   date?: string | null;
//   team?: string | null;
//   member?: number | null;
//   stadium?: string | null;
// }

// export const mateFiltersAtom = atom<IFilters>({
//   key: 'mateFiltersAtom',
//   default: {
//     gender: null,
//     age: null,
//     date: null,
//     team: null,
//     member: null,
//     stadium: null,
//   },
// });

export interface IFilters {
  gender?: string | null;
  age?: string | null;
  date?: string | null;
  team?: string | null;
  member?: number;
  stadium?: string | null;
}

export const filtersAtom = atom<IFilters>({
  key: 'filtersAtom',
  default: {
    gender: null,
    age: null,
    date: null,
    team: null,
    member: 1,
    stadium: null,
  },
});
