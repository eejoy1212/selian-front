import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { blue1, blue2 } from '../../const/colors';
import { IoClose } from "react-icons/io5";
import { LoginTxtfield } from '../textfield/LoginTxtfield';

export interface IIDSearchDialogProps {
  open: boolean;
  onClose: () => void; // onClose 타입 추가
}

export function IDSearchDialog({ open, onClose }: IIDSearchDialogProps) {
  const [activeButton, setActiveButton] = React.useState<'id' | 'password'>('id');

  return (
    <Dialog open={open} onClose={onClose}>
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
        <span>ID/PW 찾기</span>
        <IconButton onClick={onClose}>
          <IoClose />
        </IconButton>
      </DialogTitle>
      {activeButton==="id"?<DialogContent>
        <SearchBtns>
          <SearchBtn
            active={activeButton === 'id'}
            onClick={() => setActiveButton('id')}
          >
            아이디 찾기
          </SearchBtn>
          <SearchBtn
            active={false}
            onClick={() => setActiveButton('password')}
          >
            비밀번호 찾기
          </SearchBtn>
        </SearchBtns>
        <TextfieldSet>
          <LoginTxtfield
            width='100%'
            placeholder='이메일'
          />
          <AuthRow>
            <LoginTxtfield
              width='100%'
              placeholder='연락처'
            />
            <AuthBtn>인증 번호 전송</AuthBtn>
          </AuthRow>
          <LoginTxtfield
            width='100%'
            placeholder='인증번호'
          />
          
        </TextfieldSet>
        <IDSearchBtn>아이디 찾기</IDSearchBtn>
      </DialogContent>:<DialogContent>
      <SearchBtns>
          <SearchBtn
            active={false}
            onClick={() => setActiveButton('id')}
          >
            아이디 찾기
          </SearchBtn>
          <SearchBtn
            active={activeButton === 'password'}
            onClick={() => setActiveButton('password')}
          >
            비밀번호 찾기
          </SearchBtn>
        </SearchBtns>
        <TextfieldSet>
          <LoginTxtfield
            width='100%'
            placeholder='이메일'
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
            placeholder='인증번호'
          />
             <LoginTxtfield
            width='100%'
            placeholder='새로운 비밀번호'
          />
             <LoginTxtfield
            width='100%'
            placeholder='비밀번호를 다시한번 입력해주세요.'
          />
        </TextfieldSet>
        <PWBtn>비밀번호 변경</PWBtn>
      </DialogContent>}
    </Dialog>
  );
}

const IDSearchBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${blue1};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;
export const PWBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${blue2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;
const AuthBtn = styled.button`
  width: 110px;
  height: 47px;
  background-color: ${blue1};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;
export const PWAuthBtn = styled.button`
  width: 110px;
  height: 47px;
  background-color: ${blue2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;
export const AuthRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TextfieldSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

const SearchBtns = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
`;

interface SearchBtnProps {
  active: boolean;
}

const SearchBtn = styled.button<SearchBtnProps>`
  cursor: pointer;
  width: 100%;
  font-size: 13px;
  color: ${(props) => (props.active ? '#666666' : '#d9d9d9')};
  font-weight: 700;
  background-color: transparent;
  border: none;
  height: 40px;
  border-bottom: 1px solid ${(props) => (props.active ? blue2 : '#d9d9d9')};

  &:hover {
    color: ${(props) => (props.active ? blue1 : '#d9d9d9')};
  }
`;
