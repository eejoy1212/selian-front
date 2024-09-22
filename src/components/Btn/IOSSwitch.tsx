import React, { useState } from 'react';
import { Switch, styled } from '@mui/material';

// 커스텀 스위치 스타일링 (width: 60px에 맞게 조정)
const IOSSwitch = styled(Switch)(({ theme, checked }) => ({
  width: 60, // width를 60px로 조정
  height: 34, // height를 적절히 조정
  padding: 0,
  display: 'flex',
  position: 'relative',
  '& .MuiSwitch-switchBase': {
    padding: 3, // thumb padding 조정
    '&.Mui-checked': {
      transform: 'translateX(26px)', // 스위치가 켜졌을 때 thumb의 이동 거리 조정
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#335A97',
        opacity: 1,
        border: 'none',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 28, // thumb의 크기(width) 조정
    height: 28, // thumb의 크기(height) 조정
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
  },
  '& .MuiSwitch-track': {
    borderRadius: 34 / 2, // track을 둥글게 만들기
    opacity: 1,
    backgroundColor: '#d9d9d9',
    boxSizing: 'border-box',
    position: 'relative',
  },
  // 텍스트를 추가하는 부분
  '& .MuiSwitch-track::before': {
    content: `"${checked ? 'On' : 'Off'}"`, // 상태에 따른 텍스트
    position: 'absolute',
    top: '50%',
    left: checked ? '10px' : '36px', // 스위치 이동에 따른 위치 조정
    transform: 'translateY(-50%)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '12px',
  },
}));

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* 스위치 */}
      <IOSSwitch checked={checked} onChange={handleChange} />
    </div>
  );
}

export default ToggleSwitch;
