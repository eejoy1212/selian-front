import * as React from 'react';
import { useState } from 'react';

interface RadioButtonProps {
  initialChecked?: boolean;
}

export const CustomRadio: React.FC<RadioButtonProps> = ({ initialChecked = false }) => {
  const [checked, setChecked] = useState(initialChecked);

  // 클릭 시 체크 상태를 토글하는 함수
  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };

  return (
    <svg
      onClick={toggleCheck}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }} // 커서를 손가락 모양으로 변경
    >
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="13"
        rx="6.5"
        fill="#FDFDFD"
        stroke="#C2C2C2"
        style={{ transition: 'stroke 0.2s ease' }} // 애니메이션 추가
      />
      {checked && (
        <path
          d="M3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7Z"
          fill="#7975EA"
          style={{ transition: 'fill 0.3s ease, transform 0.3s ease' }} // 애니메이션 추가
          transform={checked ? 'scale(1)' : 'scale(0)'} // 체크 시 크기 변화 애니메이션
        />
      )}
    </svg>
  );
};
