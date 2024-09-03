import * as React from 'react';

interface RadioButtonProps {
  checked: boolean;
}

export const CustomRadio: React.FC<RadioButtonProps> = ({ checked }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="13" height="13" rx="6.5" fill="#FDFDFD" stroke="#C2C2C2" />
      {checked && (
        <path d="M3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7Z" fill="#7975EA" />
      )}
    </svg>
  );
};