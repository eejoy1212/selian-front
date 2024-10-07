import * as React from 'react';
import styled from 'styled-components';

export interface IShowSelectProps {
  onChange: (value: number) => void;  // 선택 변경 시 호출되는 콜백 함수
}

export function ShowTableSelect (props: IShowSelectProps) {
  const { onChange } = props;
  const options = [10, 100, 500, 1000];  // 페이지당 표시할 항목 개수

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    onChange(value);
  };

  return (
    <SelectBox onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {`${option}개씩보기`}
        </option>
      ))}
    </SelectBox>
  );
}

const SelectBox = styled.select`
   background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  font-size: 14px;
  border-radius: 5px;
  width: 111px;
  height: 30px;
  text-align: left;
  text-indent: 9px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`;
