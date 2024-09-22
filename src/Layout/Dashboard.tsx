import * as React from 'react';
import styled from 'styled-components';
import { blue2, blue3 } from '../const/colors';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LogoSrc from '../images/logo/with-txt-logo.png';
import ProfileSrc from '../images/lcons/profile.svg';
import NotiSrc from '../images/lcons/noti.svg';
import { Select, MenuItem, TextField, Checkbox, Radio } from '@mui/material';
import RabbitSrc from '../images/rabbit.jpg'
import { CustomCheckbox } from '../components/Btn/CustomCheckbox';
import { CustomRadio } from '../components/Btn/CustomRadio';
export interface IDashboardProps {}

export function Dashboard(props: IDashboardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openProfile,setOpenProfile]=React.useState(false)

  const [openNoti,setOpenNoti]=React.useState(false)
  const onClickNoti=()=>{
    setOpenNoti(p=>!p)
  }
  const onClickProfile=()=>{
    setOpenProfile(p=>!p)
  }
  
  return (
    <DashboardLayout>
      <DashAppBar>
        <LogoImg src={LogoSrc} />
        <Flex />
        <ProfileIcon src={ProfileSrc} onClick={onClickProfile}/>
        <NotiIcon src={NotiSrc} onClick={onClickNoti}/>
        {openProfile&&<ProfilePaper>
          <ProfileRow>
          <ProfileUl>
            <ProfileLi>
              wonny
            </ProfileLi>
            <ProfileLi>
              결제플랜: 베이직
            </ProfileLi>
            <ProfileLi
            onClick={()=>{
              navigate("/etc-setting")
            }}
            >
              설정변경
            </ProfileLi>
          </ProfileUl>
<ProfileCircle
>
  <ProfileImg src={RabbitSrc}/>
</ProfileCircle>
          </ProfileRow>
          <LogoutBtn>로그아웃</LogoutBtn>
        
          </ProfilePaper>}
       {openNoti&& <NotiPaper>
<NotiTitle>알림</NotiTitle>
<NotiUl>
 <NotiLi>
  <span>공지사항</span>
  <NotiTime>10분전</NotiTime>
 </NotiLi>
 <NotiLi>
  <span>공지사항</span>
  <NotiTime>10분전</NotiTime>
 </NotiLi>
 <NotiLi>
  <span>공지사항</span>
  <NotiTime>10분전</NotiTime>
 </NotiLi>
 <NotiLi>
  <span>공지사항</span>
  <NotiTime>10분전</NotiTime>
 </NotiLi>
 <NotiLi>
  <span>공지사항</span>
  <NotiTime>10분전</NotiTime>
 </NotiLi>
</NotiUl>
        </NotiPaper>}
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
                fontWeight:location.pathname === '/main'?700:500
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
              <span
              style={{
                fontWeight:location.pathname === '/gift-check'?700:500
              }}
              >상품 수집</span>
            </DefaultMenuItem>
            <DefaultMenuItem
              onClick={() => {
                navigate('/collect-check');
              }}
            >  {location.pathname === '/collect-check' && <MenuIndicator />}
              <span
                 style={{
                  fontWeight:location.pathname === '/collect-check'?700:500
                }}
              >수집 상품 관리</span>
             </DefaultMenuItem>
            {/* <DefaultMenuItem
              onClick={() => {
                navigate('/gift-register');
              }}
            >
              {location.pathname === '/gift-register' && <MenuIndicator />}
              <span
               style={{
                fontWeight:location.pathname === '/gift-register'?700:500
              }}
              >상품 마켓 등록</span>
              </DefaultMenuItem> */}
          </DefaultMenu>
          <MenuLine />
          {/* 상품관리 메뉴 */}
          <DefaultMenu>
            <DefaultMenuTitle>상품 관리</DefaultMenuTitle>
          
            <DefaultMenuItem
            onClick={() => {
              navigate('/market-register');
            }}
            >
               {location.pathname === '/market-register' && <MenuIndicator />}
             <span
              style={{
                fontWeight:location.pathname === '/market-register'?700:500
              }}
             >통계관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
            onClick={() => {
              navigate('/all-gift');
            }}
            > {location.pathname === '/all-gift' && <MenuIndicator />}
              <span
               style={{
                fontWeight:location.pathname === '/all-gift'?700:500
              }}
              >마켓 등록 상품관리</span></DefaultMenuItem>
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
             <span
              style={{
                fontWeight:(location.pathname === '/ban-manage'||location.pathname === '/ban-brand-manage')?700:500
              }}
             >금지어/브랜드관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
            
            onClick={() => {
              navigate('/substitution-word-manage');
            }}>
                {location.pathname === '/substitution-word-manage' && <MenuIndicator />}
              <span
                style={{
                  fontWeight:location.pathname === '/substitution-word-manage'?700:500
                }}
              >치환어 관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
            onClick={() => {
              navigate('/ban-code-manage');
            }}
            >
               {location.pathname === '/ban-code-manage' && <MenuIndicator />}
              <span
              style={{
                fontWeight:location.pathname === '/ban-code-manage'?700:500
              }}
              >금지 코드 관리</span>
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
              
              <span
              style={{
                fontWeight:(location.pathname === '/smart-store'||
                  location.pathname === '/coupang'||
                  location.pathname === '/eleven'||
                  location.pathname === '/gmarket'||
                  location.pathname === '/auction'||
                  location.pathname === '/interpark'||
                  location.pathname === '/lotte-on'
                )?700:500
              }}
              >사이트 API</span>
              </DefaultMenuItem>
            <DefaultMenuItem
             onClick={() => {
              navigate('/delivery-template');
            }}
            >
              {(location.pathname === '/delivery-template'||
                location.pathname === '/market-template'||
                location.pathname === '/img-template'||
                location.pathname === '/margin-template'||
                location.pathname === '/tag-template'
              ) && <MenuIndicator />}
              <span
           style={{
            fontWeight:(location.pathname === '/delivery-template'||
              location.pathname === '/market-template'||
              location.pathname === '/img-template'||
              location.pathname === '/margin-template'||
              location.pathname === '/tag-template'
            )?700:500
          }}
              >템플릿 관리</span>
              </DefaultMenuItem>
            <DefaultMenuItem
              onClick={() => {
                navigate('/etc-setting');
              }}
            >
                    {location.pathname === '/etc-setting' && <MenuIndicator />}
              <span
               style={{
                fontWeight:location.pathname === '/etc-setting'?700:500
              }}
              >기타 설정</span></DefaultMenuItem>
          </DefaultMenu>
          <MenuLine />
          {/* 로그아웃 메뉴 */}
          <DefaultMenu>
            <DefaultMenuTitle>로그아웃</DefaultMenuTitle>
          </DefaultMenu>
        </SideBar>
        {/* 옵션필터 */}
      {(location.pathname==="/gift-check")&&  <OptionFilter>
          <OptionWrapper>
            {/* 소싱사이트 */}
            <SourcingSiteSet>
              <span>소싱사이트</span>
              <SrcSelect
              >
             
                <option>아마존</option>
                <option>이베이</option>
                <option>월마트</option>
              </SrcSelect>
            </SourcingSiteSet>
            {/* 수집키워드 입력 */}
            <KeywordSet>
              <span>수집키워드 입력</span>
              <KeywordInput/>
              <KeywordUl>
                <KeywordLi>
                  <CustomCheckbox/>
                  <span>금지어수집</span>
                </KeywordLi>
                <KeywordLi>
                     <CustomCheckbox/>
                  <span>원가수집</span>
                </KeywordLi>
                <KeywordLi>
                     <CustomCheckbox/>
                  <span>광고상품수집</span>
                </KeywordLi>
                <KeywordLi>
                     <CustomCheckbox/>
                  <span>성인제품수집</span>
                </KeywordLi>
              </KeywordUl>
            </KeywordSet>
            {/* 수집갯수 제한 */}
            <MenuLine/>
            <NumSet>
              <ChkTitle>
                <CustomCheckbox/>
                <span>수집갯수 제한</span>
              </ChkTitle>
              <RangeTxtFields>
                <NumInput
                placeholder='최소 개수'
                />
                <span>~</span>
                <NumInput
                placeholder='최대 개수'
                />
              </RangeTxtFields>
            </NumSet>
            {/* 가격필터사용 */}
            <NumSet>
              <ChkTitle>
                <CustomCheckbox/>
                <span>가격필터 사용</span>
              </ChkTitle>
              <RangeTxtFields>
              <NumInput
                placeholder='최소가격(달러)'
                />
                <span>~</span>
                <NumInput
                placeholder='최대가격(달러)'
                />
              </RangeTxtFields>
            </NumSet>
            {/* 번역 api 선택 */}
            <TranslateSet>
              <span>번역 API 선택</span>
              
              <ChkTitle>
                <CustomRadio checked/>
                <span>파파고</span>
                <CustomRadio checked={false}/>
                <span>Google</span>
              </ChkTitle>
              <ChkTitle>
                <CustomRadio checked={false}/>
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
            <SmallTxtBtn>금지어 상품삭제</SmallTxtBtn>
            <Btn>단어 치환</Btn>
            </Btns>
            <Btns>
            <SmallTxtBtn>상품명 길이 설정</SmallTxtBtn>
            <SmallTxtBtn>상품중복단어 제거</SmallTxtBtn>
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
const GoEtcBtn=styled.button`

`
const SrcSelect=styled.select`

  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  font-size: 16px;
  border-radius: 5px;
  width: 138px;
  height: 30px;
  text-align: left;
  text-indent: 17px;
  color: #333333;
    &:focus {
        outline: none;
        border-color: #888; /* 포커스 시 테두리 색 변경 */
    }
`
const ProfileImg=styled.img`
width:100%
`
const ProfileCircle=styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
overflow: hidden;
border: 3px solid #8952F6;
`
const ProfileRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding:34px;
gap: 30px;
`
const LogoutBtn=styled.button`
width:100%;
background-color: #999999;
font-family: Satoshi;
font-size: 20px;
font-weight: 700;
line-height: 27px;
text-align: left;
height: 62px;
display: flex;
align-items: center;
justify-content:center;
color: white;
border: none;
`
const ProfileLi=styled.li`
font-family: Inter;
font-size: 15px;
font-weight: 400;
line-height: 24.2px;
text-align: left;
color: #666666;
cursor: pointer;
`
const ProfileUl=styled.ul`
list-style: none;
margin:0;
padding:0;
// width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
`
const ProfilePaper=styled.div`
z-index: 999;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 60px;
right: 124px;
width: 312px;
border-radius: 25px;
border: 1px solid #c2c2c2;
background-color: white;
`
const NotiTime=styled.div`
font-size: 13px;
font-weight: 700;
line-height: 17.55px;
color: #666666;
`
const NotiLi=styled.li`
height: 50px;
width: 100%;
font-size: 15px;
font-weight: 700;
display: flex;
flex-direction: column;
gap: 2px;
align-items: flex-start;
text-indent: 22px;
background-color:#D9D9D9;
`
const NotiUl=styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 5px;
width: 100%
margin:0;
padding:0;
`
const NotiTitle=styled.div`
height: 50px;
width: 100%;
text-indent: 22px;
font-size: 15px;
font-weight: 700;
display: flex;
align-items: center;
`
const NotiPaper=styled.div`
z-index: 999;
position: absolute;
top: 60px;
right: 55px;
width: 514px;
border-radius: 25px;
border: 1px solid #c2c2c2;
padding: 7px;
background-color: white;
`
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
margin-top: 10px;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 15px;
`
const Btn=styled.button`
width: 100px;
border : 1px solid #bfbfbf;
font-size: 12px;
color: #555555;
height: 30px;
border-radius: 5px;
white-space: nowrap;
`
const SmallTxtBtn=styled.button`
width: 100px;
border : 1px solid #bfbfbf;
font-size: 11px;
color: #555555;
height: 30px;
border-radius: 5px;
white-space: nowrap;
`
const Btns=styled.div`
// width: 200px;
display: flex;
// gap: 15px;
justify-content: space-between;
margin-bottom: 10px;
`

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
  gap: 12px;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  font-size: 14px;
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
  font-size: 14px;
  flex-direction: row;
  list-style: none;
`;

const KeywordUl = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const KeywordSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  margin-bottom: 20px;
`;
const NumInput=styled.input`
text-indent: 3px;
font-size: 12px;
width: 88px;
height: 30px;
background-color:white;
border-radius:5px;
border: 1px solid #d9d9d9;
`
const KeywordInput=styled.input`
text-indent: 14px;
width: 199px;
height: 30px;
background-color:white;
border-radius:5px;
border: 1px solid #d9d9d9;
`
const SourcingSiteSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 18px;
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
position: relative;
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
  min-height: calc(100vh - 61px );
`;

const OptionFilter = styled.div`
  background-color: #eceff2;
  width: 230px;
  min-width: 230px;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
   min-height: calc(100vh - 61px );
`;
