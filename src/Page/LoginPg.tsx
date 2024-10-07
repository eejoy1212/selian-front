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
import { useNavigate, useLocation } from 'react-router-dom';
import { DetailDialog } from '../components/dialog/DetailDialog';

export interface ILoginProps {}

export function LoginPg(props: ILoginProps): JSX.Element {
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  const [signupOpen, setSignUpOpen] = React.useState<boolean>(false);
  const [openDetail, setOpenDetail] = React.useState<boolean>(false);
  const [autoLogin, setAutoLogin] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const navigate = useNavigate();
  const location = useLocation();

  // 로그인 여부를 확인하는 useEffect
  React.useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isAutoLogin') === 'true';
    const currentUserId = localStorage.getItem('userId');
    
    // 사용자가 로그인 상태가 아닐 때 메인 페이지로 접근 시도하면 로그인 페이지로 리디렉션
    if (!isUserLoggedIn || !currentUserId) {
      if (location.pathname === "/main") {
        navigate("/");
      }
    } else {
      // 로그인 상태면 /main 페이지로 자동 이동
      if (location.pathname === "/") {
        navigate("/main");
      }
    }
  }, [location, navigate]);

  const handleLogin = (): void => {
    if (userId && password) {
      if (autoLogin) {
        localStorage.setItem('isAutoLogin', 'true');
        localStorage.setItem('userId', userId);
      } else {
        localStorage.removeItem('isAutoLogin');
        localStorage.removeItem('userId');
      }
      navigate("/main");
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAutoLogin(event.target.checked);
  };

  const onSearchClose = (): void => {
    setSearchOpen(false);
  };
  const onClickSearch = (): void => {
    setSearchOpen(true);
  };
  const onSignUpClose = (): void => {
    setSignUpOpen(false);
  };
  const onClickSignUp = (): void => {
    setSignUpOpen(true);
  };
  const onClickOpenDetail = (): void => {
    setOpenDetail(true);
  };
  const onClickCloseDetail = (): void => {
    setOpenDetail(false);
  };

  return (
    <LoginPageLayout>
      <WhiteLogoImg src={WhiteLogo} alt="White Logo" loading="lazy" />
      {/* 자세히보기 다이얼로그 */}
      <DetailDialog open={openDetail} onClose={onClickCloseDetail} />
      {/* 회원가입 다이얼로그 */}
      <SignUpDialog open={signupOpen} onOpenDetail={onClickOpenDetail} onClose={onSignUpClose} />
      {/* 아이디 비밀번호 찾기 다이얼로그 */}
      <IDSearchDialog open={searchOpen} onClose={onSearchClose} />
      <LoginImage src={LoginBg} alt="Login Background" loading="lazy" />

      <LoginContainer>
        <img src={WithTxtLogo} width={"138px"} alt="With Logo" loading="lazy" />
        <LoginTxtFieldSet>
          <LoginTxtfield
            placeholder="로그인 아이디"
            value={userId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
          />
          <LoginTxtfield
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <AutoLoginRow>
            <Checkbox
              checked={autoLogin}
              onChange={handleCheckboxChange}
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
        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
        <SignUpRow>
          <SignUpBtn onClick={onClickSignUp}>회원가입</SignUpBtn>
          <VerticalDivider />
          <SearchBtn onClick={onClickSearch}>아이디/비밀번호 찾기</SearchBtn>
        </SignUpRow>
      </LoginContainer>
    </LoginPageLayout>
  );
}

// 스타일 컴포넌트 정의
const WhiteLogoImg = styled.img`
  position: absolute;
  z-index: 999;
  width: 140px;
  top: 53px;
  left: 56px;
`;

const LoginImage = styled.img`
  z-index: 900;
  height: 100vh;
  object-fit: cover;
`;

const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: #d9d9d9;
  height: 13px;
`;

const SignUpRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SignUpBtn = styled.button`
  cursor: pointer;
  color: black;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 700;
`;

const SearchBtn = styled.button`
  cursor: pointer;
  color: #999999;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 700;
`;

const LoginBtn = styled.button`
  width: 300px;
  height: 38px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${blue1};
  color: white;
  font-weight: 700;
`;

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
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  justify-content: center;
`;
