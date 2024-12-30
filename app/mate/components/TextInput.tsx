import React from 'react';

interface ITextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  name: string;
  multiline?: boolean;
}

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  name,
  multiline = false,
}: ITextInputProps) {
  return (
    <div>
      <label className="text-16 font-semibold mb-16 text-left flex items-center">
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full py-7 placeholder-opacity-20 border-b border-lightGray placeholder:text-opacity-70 text-18 font-light resize-none"
          style={{ height: '93.14px', lineHeight: '1.3' }}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full py-7 placeholder-opacity-20 border-b border-lightGray placeholder:text-opacity-70 text-18 font-light"
        />
      )}
    </div>
  );
}
