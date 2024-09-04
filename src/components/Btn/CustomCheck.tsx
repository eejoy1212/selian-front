import * as React from 'react';

interface CheckProps {
  checked: boolean;
}

export const CustomCheck: React.FC<CheckProps> = ({ checked }) => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="1"
        y="0.5"
        width="15"
        height="15"
        rx="7.5"
        fill={checked ? "#335A97" : "#FDFDFD"}
        stroke={checked ? "#335A97" : "#C2C2C2"}
      />
      {checked && (
        <path d="M4.5 8.2L7.16667 11L12.5 5" stroke="white" />
      )}
    </svg>
  );
};
