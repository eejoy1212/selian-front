import { Switch, styled } from '@mui/material';

const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 52, // height에 맞게 비율 조정
  height: 31, // 요청한 height 크기
  padding: 0,
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 2, // thumb padding 조정
    '&.Mui-checked': {
      transform: 'translateX(20px)', // 체크된 상태에서 thumb 이동
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#335A97', // 켜졌을 때 배경색
        opacity: 1,
        border: 'none',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 27, // height에 맞춘 thumb 크기
    height: 27, // thumb height
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
  },
  '& .MuiSwitch-track': {
    borderRadius: 31 / 2, // track을 둥글게 만들기
    opacity: 1,
    backgroundColor: '#d9d9d9', // 꺼졌을 때 배경색
    boxSizing: 'border-box',
  },
}));

export default IOSSwitch;
