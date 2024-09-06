import * as React from 'react';
import styled from 'styled-components';
import WhiteLogo from '../images/logo/white-logo.png';
import WithTxtLogo from '../images/logo/with-txt-logo.png';
import LoginBg from '../images/login/login-bg.png';
import { Checkbox } from '@mui/material';
import { LoginTxtfield } from '../components/textfield/LoginTxtfield';
import { blue1 } from '../const/colors';
import { IDSearchDialog } from '../components/dialog/IDSearchDialog';
import { SignUpDialog } from '../components/dialog/SignUpDialog';
import { useNavigate } from 'react-router-dom';
import { DetailDialog } from '../components/dialog/DetailDialog';

export interface ILoginProps {}

export function LoginPg(props: ILoginProps) {
  const [searchOpen,setSearchOpen]=React.useState(false)
  const [signupOpen,setSignUpOpen]=React.useState(false)
  const [openDetail,setOpenDetail]=React.useState(false)

  const navigate=useNavigate()
  const onSearchClose=()=>{
    setSearchOpen(false)
  }
  const onClickSearch=()=>{
    setSearchOpen(true)
  }
  const onSignUpClose=()=>{
    setSignUpOpen(false)
  }
  const onClickSignUp=()=>{
    setSignUpOpen(true)
  }
   const onClickOpenDetail=()=>{
     setOpenDetail(true)
   }
   const onClickCloseDetail=()=>{
     setOpenDetail(false)
   }
  return (
    <LoginPageLayout>  
      <WhiteLogoImg src={WhiteLogo} />
      {/* 자세히보기 다이얼로그 */}
      <DetailDialog open={openDetail} onClose={onClickCloseDetail}/>
      {/* 회원가입 다이얼로그 */}
      <SignUpDialog open={signupOpen} 
      onOpenDetail={onClickOpenDetail}
      onClose={onSignUpClose}/>
        {/* 아이디 비밀번호 찾기 다이얼로그 */}
        <IDSearchDialog open={searchOpen} onClose={onSearchClose}/>
<LoginImage src={LoginBg} alt="Login Background" />

      <LoginContainer>
      <img src={WithTxtLogo} width={"138px"} alt="With Logo" />
      <LoginTxtFieldSet>
        <LoginTxtfield placeholder="로그인 아이디" />
        <LoginTxtfield placeholder="비밀번호" />
        <AutoLoginRow>
          <Checkbox
            sx={{
              color: "#577BB5",
              '&.Mui-checked': {
                color: "#577BB5",
              },
            }}
          />
          <span>자동 로그인</span>
        </AutoLoginRow>
      </LoginTxtFieldSet>
<LoginBtn
onClick={()=>{navigate("/main")}}
>로그인</LoginBtn>
<SignUpRow>
<SignUpBtn  onClick={onClickSignUp}>회원가입</SignUpBtn>
<VerticalDivider/>
<SearchBtn onClick={onClickSearch}>아이디/비밀번호 찾기</SearchBtn>

</SignUpRow>

      </LoginContainer>
      
     

    </LoginPageLayout>
  );
}
const WhiteLogoImg = styled.img`
  position: absolute;
  z-index: 999;
  width: 140px;
  top: 53px; /* top 값을 더 작은 값으로 */
  left: 56px; /* left 값을 더 작은 값으로 */
`;


const LoginImage = styled.img`
z-index: 900;
  height: 900px;
  height: 100vh;
  object-fit: cover;
`;

const LoginPageLayout=styled.div`
display: flex;
flex-direction: row;
 position: relative; 
`
export const VerticalDivider=styled.div`
width: 1px;
background-color: #d9d9d9;
height: 13px;
`
const SignUpRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const SignUpBtn=styled.button`
cursor: pointer;
color:black;
background-color: transparent;
border: none;
font-size: 16px;
font-weight: 700;
`
const SearchBtn=styled.button`
cursor: pointer;
color:#999999;
background-color: transparent;
border: none;
font-size: 16px;
font-weight: 700;
`
const LoginBtn=styled.button`
width: 300px;
height: 38px;
font-size: 16px;
border-radius: 8px;
border: none;
cursor: pointer;
background-color:${blue1};
color: white;
font-weight: 700;
`
const AutoLoginRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  margin-left: -10px;
`;

const LoginTxtFieldSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const LoginContainer = styled.div`
  width: 1200px;
  min-width: 1200px;
  height: 100vh;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  justify-content: center;
`;
