import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { LoginTxtfield } from '../textfield/LoginTxtfield';
import { AuthRow, PWAuthBtn, PWBtn, TextfieldSet } from './IDSearchDialog';
export interface ISignUpDialogProps {
    open: boolean;
    onClose: () => void; // onClose 타입 추가
}

export function SignUpDialog ({open,onClose}: ISignUpDialogProps) {
  return (
    <Dialog
    open={open}
    >
 <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <IconButton
          disabled
          sx={{
            cursor: "default",
            opacity: 0
          }}
        >
          <IoClose />
        </IconButton>
        <span>회원가입</span>
        <IconButton onClick={onClose}>
          <IoClose />
        </IconButton>
      </DialogTitle>
        <DialogContent>
        <TextfieldSet>
          <LoginTxtfield
            width='100%'
            placeholder='아이디'
          />
          <AuthRow>
            <LoginTxtfield
              width='100%'
              placeholder='연락처'
            />
            <PWAuthBtn>인증 번호 전송</PWAuthBtn>
          </AuthRow>
          <LoginTxtfield
            width='100%'
            placeholder='비밀번호'
          />
           
        </TextfieldSet>
        <PWBtn>회원가입</PWBtn>
        </DialogContent>
    </Dialog>
  );
}
