// import { mateFormState } from '@/recoil/mate/mateAtom';
// import { useRecoilState } from 'recoil';

// export function useMateForm() {
//   const [formState, setFormState] = useRecoilState(mateFormState);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOptionSelect = (option: string) => {
//     setFormState((prev) => ({
//       ...prev,
//       options: prev.options.includes(option)
//         ? prev.options.filter((o) => o !== option)
//         : [...prev.options, option],
//     }));
//   };

//   return {
//     formState,
//     handleInputChange,
//     handleOptionSelect,
//   };
// }

import { useState } from 'react';

export const useMateForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    content: '',
    contact: '',
    options: {
      gender: '',
      age: '',
      date: '',
      team: '',
      member: 0,
      stadium: '',
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionSelect = (name: string, value: string | number) => {
    setFormState((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [name]: value,
      },
    }));
  };

  const resetForm = () => {
    setFormState({
      title: '',
      content: '',
      contact: '',
      options: {
        gender: '',
        age: '',
        date: '',
        team: '',
        member: 0,
        stadium: '',
      },
    });
  };

  return { formState, handleInputChange, handleOptionSelect, resetForm };
};
