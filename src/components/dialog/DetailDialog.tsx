import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

export interface IDetailDialogProps {
  open: boolean;
  onClose:()=>void;
}

export function DetailDialog ({open,onClose}: IDetailDialogProps) {
  return (
    <Dialog open={open}
    sx={{
      '& .MuiDialog-paper': {
          minWidth: '516px'
      }
  }}
    >
      <DialogTitle
      sx={{
        textAlign:"center"
      }}
      >서비스 이용 약관</DialogTitle>
      <DialogContent>
        <div> <p>제1조 (목적)
본 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 회사원의 권리,의무 책임사항, 기타 필요사항을 규정함을 목적으로 합니다.
</p>
<p>제2조 (회원의 정의)
회원이란 회사가 제공하는 서비스에 접속하여 본 약관에 따라 회사의 이용철차에 동의하고 회사가 제공하는 서비스를 이용하는 이용자를 말합니다.
</p>
      제3조 (회원가입)
회원이 되고자 하는 자는 회사가 정한 가입 양식에 따라 회원정보를 기입하고, “동의”, “확인” 등의 버턴을 누르는 방법으로 회원가입을 신청합니다.
      </div>
      <ConfirmRow><ConfirmBtn
      onClick={onClose}
      >확인</ConfirmBtn></ConfirmRow>
      
       </DialogContent>
    </Dialog>
  );
}
const ConfirmRow=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 41px;
`
const ConfirmBtn=styled.button`
cursor: pointer;
width: 413px;
height: 50px;
background-color: #37508B;
color: white;
border-radius: 8px;
border: none;
`