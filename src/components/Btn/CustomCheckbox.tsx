import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface ICustomCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void; // 부모로 상태 전달
}

export function CustomCheckbox({ checked = false, onChange }: ICustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState); // 부모 컴포넌트로 상태 전달
    }
  };

  // checked prop이 변경되면 내부 상태도 업데이트
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <CheckboxWrapper onClick={handleCheckboxClick}>
      {isChecked ? (
        <CheckedSvg
          width="16"  // 크기를 고정
          height="16" // 크기를 고정
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="15" height="15" fill="#335A97" stroke="#335A97" />
          <path d="M2.75 6.6875L6.6875 11.0625L12.8125 4.5" stroke="white" />
        </CheckedSvg>
      ) : (
        <UncheckedSvg
          width="16"  // 크기를 고정
          height="16" // 크기를 고정
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="15" height="15" fill="#FDFDFD" stroke="#C2C2C2" />
        </UncheckedSvg>
      )}
    </CheckboxWrapper>
  );
}

// 스타일 컴포넌트 정의

const CheckboxWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 16px;  // 체크박스 크기를 고정
  height: 16px; // 체크박스 크기를 고정
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckedSvg = styled.svg`
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform: scale(1);
  opacity: 1;

  &:hover {
    transform: scale(1.1);  // 마우스 오버 시 살짝 커지는 효과
  }
`;

const UncheckedSvg = styled.svg`
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform: scale(1);
  opacity: 1;

  &:hover {
    transform: scale(1.1);  // 마우스 오버 시 살짝 커지는 효과
  }
`;
