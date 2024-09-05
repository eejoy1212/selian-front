import * as React from 'react';
import styled from 'styled-components';
import { blue2, blue3 } from '../const/colors';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LogoSrc from '../images/logo/with-txt-logo.png';
import ProfileSrc from '../images/lcons/profile.svg';
import NotiSrc from '../images/lcons/noti.svg';
import { Select, MenuItem, TextField, Checkbox, Radio } from '@mui/material';

export interface IDashboardProps {}

export function Dashboard(props: IDashboardProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <DashboardLayout>
      <DashAppBar>
        <LogoImg src={LogoSrc} />
        <Flex />
        <ProfileIcon src={ProfileSrc} />
        <NotiIcon src={NotiSrc} />
      </DashAppBar>
      <DashboardWrapper>
        <SideBar>
          {/* 대시보드 메뉴 */}
          <DashMenu
            onClick={() => {
              navigate('/main');
            }}
          >
            {location.pathname === '/main' && <MenuIndicator />}
            <span
              style={{
                textIndent: location.pathname === '/main' ? '4px' : '40px',
              }}
            >
              대시보드
            </span>
          </DashMenu>
          <MenuLine />
          {/* 상품등록 메뉴 */}
          <DefaultMenu>
            <DefaultMenuTitle>상품등록</DefaultMenuTitle>
            <DefaultMenuItem
              onClick={() => {
                navigate('/gift-check');
              }}
            >
              {location.pathname === '/gift-check' && <MenuIndicator />}
              <span>상품수집 및 검수</span>
            </DefaultMenuItem>
            <DefaultMenuItem
              onClick={() => {
                navigate('/gift-register');
              }}
            >
              {location.pathname === '/gift-register' && <MenuIndicator />}
              <span>상품 마켓 등록</span>
              </DefaultMenuItem>
          </DefaultMenu>
          <MenuLine />
          {/* 상품관리 메뉴 */}
          <DefaultMenu>
            <DefaultMenuTitle>상품 관리</DefaultMenuTitle>
            <DefaultMenuItem
              onClick={() => {
                navigate('/collect-check');
              }}
            >  {location.pathname === '/collect-check' && <MenuIndicator />}
              <span>수집 상품 관리</span>
             </DefaultMenuItem>
            <DefaultMenuItem
            onClick={() => {
              navigate('/market-register');
            }}
            >
               {location.pathname === '/market-register' && <MenuIndicator />}
             <span>마켓 등록 상품 관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
            onClick={() => {
              navigate('/all-gift');
            }}
            > {location.pathname === '/all-gift' && <MenuIndicator />}
              <span>전체상품 내역</span></DefaultMenuItem>
          </DefaultMenu>
          <MenuLine />
          {/* 설정 메뉴 */}
          <DefaultMenu>
            <DefaultMenuTitle>설정</DefaultMenuTitle>
            <DefaultMenuItem
              onClick={() => {
                navigate('/ban-manage');
              }}
            >
               {(location.pathname === '/ban-manage'||location.pathname === '/ban-brand-manage') && <MenuIndicator />}
             <span>금지어/브랜드관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
            
            onClick={() => {
              navigate('/substitution-word-manage');
            }}>
                {location.pathname === '/substitution-word-manage' && <MenuIndicator />}
              <span>치환어 관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
            onClick={() => {
              navigate('/ban-code-manage');
            }}
            >
               {location.pathname === '/ban-code-manage' && <MenuIndicator />}
              <span>금지 코드 관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
              onClick={() => {
                navigate('/smart-store');
              }}
            >
                {(location.pathname === '/smart-store'||
                  location.pathname === '/coupang'||
                  location.pathname === '/eleven'||
                  location.pathname === '/gmarket'||
                  location.pathname === '/auction'||
                  location.pathname === '/interpark'||
                  location.pathname === '/lotte-on'
                ) && <MenuIndicator />}
              
              <span>사이트 API</span>
              </DefaultMenuItem>
            <DefaultMenuItem
             onClick={() => {
              navigate('/delivery-template');
            }}
            >
              {location.pathname === '/delivery-template' && <MenuIndicator />}
              <span>템플릿 관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
              onClick={() => {
                navigate('/etc-setting');
              }}
            >
                    {location.pathname === '/etc-setting' && <MenuIndicator />}
              <span>기타 설정</span></DefaultMenuItem>
          </DefaultMenu>
          <MenuLine />
          {/* 로그아웃 메뉴 */}
          <DefaultMenu>
            <DefaultMenuTitle>로그아웃</DefaultMenuTitle>
          </DefaultMenu>
        </SideBar>
        {/* 옵션필터 */}
      {location.pathname==="/gift-check"&&  <OptionFilter>
          <OptionTitle>옵션 필터</OptionTitle>
          <OptionWrapper>
            {/* 소싱사이트 */}
            <SourcingSiteSet>
              <span>소싱사이트</span>
              <Select
                size='small'
                inputProps={{
                  style: {
                    height: '20px',
                    backgroundColor: 'white',
                  },
                }}
                sx={{
                  height: '30px',
                  backgroundColor: 'white',
                  width: '138px',
                }}
                defaultValue=''
                displayEmpty
              >
                <MenuItem value=''>
                  <em>선택하세요</em>
                </MenuItem>
                <MenuItem value='amazon'>아마존</MenuItem>
                <MenuItem value='ebay'>이베이</MenuItem>
                <MenuItem value='walmart'>월마트</MenuItem>
              </Select>
            </SourcingSiteSet>
            {/* 수집키워드 입력 */}
            <KeywordSet>
              <span>수집키워드 입력</span>
              <TextField
                size='small'
                inputProps={{
                  style: {
                    height: '14px',
                    backgroundColor: 'white',
                  },
                }}
                sx={{
                  backgroundColor: 'white',
                  width: '199px',
                  height: '18px',
                  marginBottom: '18px',
                }}
              />
              <KeywordUl>
                <KeywordLi>
                  <CustomChk />
                  <span>금지어수집</span>
                </KeywordLi>
                <KeywordLi>
                  <CustomChk />
                  <span>원가수집</span>
                </KeywordLi>
                <KeywordLi>
                  <CustomChk />
                  <span>광고상품수집</span>
                </KeywordLi>
                <KeywordLi>
                  <CustomChk />
                  <span>성인제품수집</span>
                </KeywordLi>
              </KeywordUl>
              <MenuLine />
            </KeywordSet>
            {/* 수집갯수 제한 */}
            <NumSet>
              <ChkTitle>
                <CustomChk />
                <span>수집갯수 제한</span>
              </ChkTitle>
              <RangeTxtFields>
                <TextField
                  size='small'
                  inputProps={{
                    style: {
                      height: '14px',
                      backgroundColor: 'white',
                    },
                  }}
                  sx={{
                    backgroundColor: 'white',
                    width: '88px',
                    height: '18px',
                    marginBottom: '18px',
                  }}
                />
                <span>~</span>
                <TextField
                  size='small'
                  inputProps={{
                    style: {
                      height: '14px',
                      backgroundColor: 'white',
                    },
                  }}
                  sx={{
                    backgroundColor: 'white',
                    width: '88px',
                    height: '18px',
                    marginBottom: '18px',
                  }}
                />
              </RangeTxtFields>
            </NumSet>
            {/* 가격필터사용 */}
            <NumSet>
              <ChkTitle>
                <CustomChk />
                <span>가격필터 사용</span>
              </ChkTitle>
              <RangeTxtFields>
                <TextField
                  size='small'
                  inputProps={{
                    style: {
                      height: '14px',
                      backgroundColor: 'white',
                    },
                  }}
                  sx={{
                    backgroundColor: 'white',
                    width: '88px',
                    height: '18px',
                    marginBottom: '18px',
                  }}
                />
                <span>~</span>
                <TextField
                  size='small'
                  inputProps={{
                    style: {
                      height: '14px',
                      backgroundColor: 'white',
                    },
                  }}
                  sx={{
                    backgroundColor: 'white',
                    width: '88px',
                    height: '18px',
                    marginBottom: '18px',
                  }}
                />
              </RangeTxtFields>
            </NumSet>
            {/* 번역 api 선택 */}
            <TranslateSet>
              <span>번역 API 선택</span>
              <ChkTitle>
                <CustomRadio />
                <span>파파고</span>
              </ChkTitle>
              <ChkTitle>
                <CustomRadio />
                <span>Google</span>
              </ChkTitle>
              <ChkTitle>
                <CustomRadio />
                <span>DeepL</span>
              </ChkTitle>
            </TranslateSet>
            {/* 버튼들 */}
            <Btns>
            <Btn>판매가 설정</Btn>
            <Btn>배송/교환비변경</Btn>
            </Btns>
            <Btns>
            <Btn>태그 설정</Btn>
            <Btn>카테고리 설정</Btn>
            </Btns>
            <Btns>
            <Btn>금지어 상품삭제</Btn>
            <Btn>단어 치환</Btn>
            </Btns>
            <Btns>
            <Btn>상품명 길이 설정</Btn>
            <Btn>상품중복단어 제거</Btn>
            </Btns>
            <Btns>
            <Btn>상품키워드 추가</Btn>
            <Btn>상품명 원상복구</Btn>
            </Btns>
            <SaveBtns>
                  <InitBtn>초기화</InitBtn>
                  <GetBtn>수집</GetBtn>
            </SaveBtns>
          </OptionWrapper>
        </OptionFilter>}
        {/* 내용 */}
        <Outlet />
      </DashboardWrapper>
    </DashboardLayout>
  );
}
const InitBtn=styled.button`
width: 53px;
background-color: white;
border: 1px solid #666666;
border-radius: 5px;
color: #666666;
height: 30px;
font-size: 12px;
`
const GetBtn=styled.button`
width: 81px;
background-color: #335A97;
border: none;
border-radius: 5px;
color: white;
height: 30px;
font-size: 12px;
`
const SaveBtns=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 15px;
`
const Btn=styled.button`
width: 100%;
border : 1px solid #bfbfbf;
font-size: 10px;
color: #555555;
height: 26px;
border-radius: 5px;
white-space: nowrap;
`
const Btns=styled.div`
width: 100%;
display: flex;
gap: 15px;
justify-content: space-between;
margin-bottom: 10px;
`
const CustomRadio = styled(Radio)`
  width: 10px;
  height: 10px;
  & .MuiSvgIcon-root {
    font-size: 20px; /* 아이콘 크기를 7px로 설정 */
  }
`;
const CustomChk = styled(Checkbox)`
  width: 10px;
  height: 10px;
  & .MuiSvgIcon-root {
    font-size: 20px; /* 아이콘 크기를 7px로 설정 */
  }
`;

const RangeTxtFields = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const NumSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 15px;
  font-size: 14px;
`;

const TranslateSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 15px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const KeywordLi = styled.li`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  font-size: 12px;
  flex-direction: row;
  list-style: none;
`;

const ChkTitle = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 12px;
  flex-direction: row;
  list-style: none;
`;

const KeywordUl = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const KeywordSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
`;

const SourcingSiteSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 17px;
  font-size: 14px;
`;

const OptionWrapper = styled.div`
  margin-top: 16px;
  width: calc(100% - 14px - 14px);
  display: flex;
  flex-direction: column;
`;

const OptionTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  height: 50px;
  color: #333333;
  font-size: 16px;
`;

const Flex = styled.div`
  flex: 1;
`;

const LogoImg = styled.img`
  height: 36px;
  margin-left: 40px;
`;

const ProfileIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const NotiIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 99px;
  margin-left: 16px;
`;

const DashAppBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  min-width: 1400px;
  height: 60px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid #d9d9d9;
`;

const DefaultMenuItem = styled.div`
  text-indent: 61px;
  height: 42px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
`;

const DefaultMenuTitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: #101010;
  text-indent: 39px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const DefaultMenu = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;

const MenuLine = styled.div`
  height: 1px;
  width: 210px;
  background-color: #dedede;
`;

const MenuIndicator = styled.div`
  width: 6px;
  height: 38px;
  background-color: ${blue2};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const DashMenu = styled.div`
  width: 100%;
  height: 50px;
  color: #101010;
  font-size: 16px;
  display: flex;
  gap: 34px;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

const DashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  // height: 100vh;
  min-height: 900px;
//  overflow-x: hidden;
  `;

const DashboardWrapper = styled.div`
  width: 100vw;
  // height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  background-color: ${blue3};
   
`;

const SideBar = styled.div`
  background-color: white;
  border-right: 1px solid #dedede;
  width: 230px;
  min-width: 230px;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionFilter = styled.div`
  background-color: #eceff2;
  width: 230px;
  min-width: 230px;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
