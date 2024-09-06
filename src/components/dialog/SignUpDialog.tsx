import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { LoginTxtfield } from '../textfield/LoginTxtfield';
import { AuthRow, PWAuthBtn, PWBtn, TextfieldSet } from './IDSearchDialog';
import styled from 'styled-components';
import LogoSrc from '../../images/logo/logo.png'
import { TxtfieldTitle } from '../../content/SiteApi';
import { CustomCheckbox } from '../Btn/CustomCheckbox';
import { Flex } from '../../content/AllGift';
export interface ISignUpDialogProps {
    open: boolean;
    onClose: () => void; // onClose 타입 추가
    onOpenDetail:()=>void;
}

export function SignUpDialog ({open,onClose,onOpenDetail}: ISignUpDialogProps) {

  return (
    <Dialog
    open={open}
    >
      
 <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px"
        }}
      >
<TitleRow><IconButton
          disabled
          sx={{
            cursor: "default",
            opacity: 0
          }}
        >
          <IoClose />

        </IconButton>
        <LogoTitle>  
          <SignUpLogo src={LogoSrc}/>
        <span
        
        >회원가입</span></LogoTitle>
      
        <IconButton onClick={onClose}>
          <IoClose />
        </IconButton>
        </TitleRow>
        
       
      </DialogTitle>
        <DialogContent>
     
          {/* 이름 입력창 */}
        <SignUpInputSet>
       <InputSetTitle>이름</InputSetTitle>
       <SignUpInput placeholder='성함을 입력해주세요.'/>
        </SignUpInputSet>
           {/* 이메일 입력창 */}
           <SignUpInputSet>
       <InputSetTitle>ID( 이메일 형식 )</InputSetTitle>
       <SignUpInput placeholder='이메일 형식으로 ID를 입력합니다.'/>
        </SignUpInputSet>
         {/* 휴대폰 번호 입력창 */}
         <SignUpInputSet>
       <InputSetTitle>휴대폰 번호</InputSetTitle>
       <PhoneRow>
        <PhoneInput placeholder='연락처'/>
        <NumSendBtn>인증 번호 전송</NumSendBtn>
      </PhoneRow>
    
        </SignUpInputSet>
          {/* 인증번호 입력창 */}
          <SignUpInputSet>
       <InputSetTitle>인증번호</InputSetTitle>
       <PhoneRow>
        <PhoneInput placeholder='전송된 번호를 입력해 주세요.'/>
        <NumConfirmBtn>확인</NumConfirmBtn>
      </PhoneRow>
    
        </SignUpInputSet>
         {/* 비밀번호 입력창 */}
         <SignUpInputSet>
       <InputSetTitle>비밀번호</InputSetTitle>
       <SignUpInput placeholder='비밀번호 (8자 이상 영문, 숫자, 특수문자 조합)'/>
        </SignUpInputSet>
         {/* 비밀번호 확인 입력창 */}
         <SignUpInputSet>
       <InputSetTitle>비밀번호 확인</InputSetTitle>
       <SignUpInput placeholder='위와 동일하게 적어주세요.'/>
        </SignUpInputSet>
        {/* 약관 동의 */}
        <AgreeTitle>약관 동의</AgreeTitle>
        <AgreeChkRow>
          <CustomCheckbox/>
          <span>[필수] 서비스 이용약관</span>
          <Flex/>
          <DetailBtn onClick={onOpenDetail}>자세히 보기</DetailBtn>
        </AgreeChkRow>
        <PWBtn>회원가입</PWBtn>
        </DialogContent>
    </Dialog>
  );
}
const LogoTitle=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap : 10px;
`
const DetailBtn=styled.button`
border: 1px solid #666666;
background-color: white;
border-radius: 8px;
cursor: pointer;
width: 110px;
height: 30px;
font-size: 14px;
`
const AgreeChkRow=styled.div`
font-size: 14px;
font-weight: 400;
display: flex;
align-items: center;
gap: 16px;
color: #666666;
margin-bottom: 30px;
`
const AgreeTitle=styled.div`
color: #999999;
font-size: 16px;
font-weight: 700;
text-indent: 20px;
height: 43px;
display: flex;
align-items: flex-end;
margin-bottom: 19px;
`
const NumConfirmBtn=styled.button`
border: 1px solid #37508B;
background-color: #37508B;
color: white;
border-radius: 8px;
cursor: pointer;
width: 110px;
font-size: 14px;
`
const NumSendBtn=styled.button`
border: 1px solid #666666;
background-color: white;
border-radius: 8px;
cursor: pointer;
width: 110px;
font-size: 14px;
`
const PhoneRow=styled.div`
display: flex;
flex-direction: row;
gap: 14px;
`
const PhoneInput=styled.input`
width: 375px;
height: 45px;
border-radius: 5px;
background-color:#F4F4F4;
border: none;
text-indent: 20px;
font-size: 16px;
font-weight: 500; 
`
const SignUpInput=styled.input`
width: 489px;
height: 45px;
border-radius: 5px;
background-color:#F4F4F4;
border: none;
text-indent: 20px;
font-size: 16px;
font-weight: 500; 
`
const InputSetTitle=styled.div`
font-size: 16px;
font-weight: 700;
line-height: 21.6px;
text-indent: 20px;
color: #999999;
`
const SignUpInputSet=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
gap: 7px;
height: 95px;
`
const SubTitle=styled.div`
font-size: 18px;
font-weight: 700;
text-indent: 19px;
color: #666666;
margin-bottom: 21px;
`
const TitleRow=styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const SignUpLogo=styled.img`
width: 30px;
`