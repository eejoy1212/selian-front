import * as React from 'react';
import styled from 'styled-components';
import { blue2, blue3 } from '../const/colors';
import { Outlet } from 'react-router-dom';
import LogoSrc from '../images/logo/with-txt-logo.png'
import ProfileSrc from '../images/lcons/profile.svg'
import NotiSrc from '../images/lcons/noti.svg'
export interface IDashboardProps {
}

export function Dashboard(props: IDashboardProps) {
  return (
    <DashboardLayout>
      <DashAppBar>
        <LogoImg src={LogoSrc}/>
        <Flex/>
        <ProfileIcon src={ProfileSrc}/>
        <NotiIcon src={NotiSrc}/>
      </DashAppBar>
      <DashboardWrapper><SideBar>
        {/* 대시보드 메뉴 */}
        <DashMenu>
          <MenuIndicator />
          <span>대시보드</span>
        </DashMenu>
        <MenuLine />
        {/* 상품관리 메뉴 */}
        <DefaultMenu>
          <DefaultMenuTitle>
            상품관리
          </DefaultMenuTitle>
          <DefaultMenuItem>
            상품수집
          </DefaultMenuItem>
          <DefaultMenuItem>
            수집상품 검수
          </DefaultMenuItem>
          <DefaultMenuItem>
            마켓등록
          </DefaultMenuItem>
          <DefaultMenuItem>
            등록상품 관리
          </DefaultMenuItem>
          <DefaultMenuItem>
            전체상품 내역
          </DefaultMenuItem>
        </DefaultMenu>
        <MenuLine />
        {/* 금지사항 관리 메뉴 */}
        <DefaultMenu>
          <DefaultMenuTitle>
            금지사항 관리
          </DefaultMenuTitle>
          <DefaultMenuItem>
            금지어/브랜드 관리
          </DefaultMenuItem>
          <DefaultMenuItem>
            치환어 관리
          </DefaultMenuItem>
          <DefaultMenuItem>
            금지 코드 관리
          </DefaultMenuItem>
        </DefaultMenu>
        <MenuLine />
        {/* 설정 메뉴 */}
        <DefaultMenu>
          <DefaultMenuTitle>
            설정
          </DefaultMenuTitle>
          <DefaultMenuItem>
            마켓 API 관리
          </DefaultMenuItem>
          <DefaultMenuItem>
            템플릿 관리
          </DefaultMenuItem>
          <DefaultMenuItem>
            기타 설정
          </DefaultMenuItem>
        </DefaultMenu>
        <MenuLine />
        {/* 상품코드 찾기 메뉴 */}
        <DefaultMenu>
          <DefaultMenuTitle>
            상품코드 찾기
          </DefaultMenuTitle>

        </DefaultMenu>
        <MenuLine />
        {/* 로그아웃 메뉴 */}
        <DefaultMenu>
          <DefaultMenuTitle>
            로그아웃
          </DefaultMenuTitle>

        </DefaultMenu>
        <MenuLine />
      </SideBar>
      <Outlet/></DashboardWrapper>
      
    </DashboardLayout>
  );
}
const Flex=styled.div`
flex: 1;
`
const LogoImg=styled.img`
height: 36px;
margin-left: 40px;
`
const ProfileIcon=styled.img`
width: 25px;
height: 25px;
`
const NotiIcon=styled.img`
width: 25px;
height: 25px;
margin-right: 99px;
margin-left: 16px;
`
const DashAppBar=styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100vw;
min-width: 1400px;
height: 60px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-bottom : 1px solid #d9d9d9;
`
const DefaultMenuItem = styled.div`
text-indent: 61px;
height: 42px;
display: flex;
align-items: center;
font-size: 15px;
font-weight: 400;
cursor: pointer;
`
const DefaultMenuTitle = styled.div`
width: 100%;
font-weight: 500;
font-size: 16px;
color: #101010;
text-indent: 39px;
height: 50px;
display: flex;
align-items: center;
`
const DefaultMenu = styled.div`
width: 100%;
padding-bottom: 10px;
`
const MenuLine = styled.div`
height: 1px;
width: 210px;
background-color: #dedede;
`
const MenuIndicator = styled.div`
width: 6px;
height:38px;
background-color: ${blue2};
border-top-right-radius:5px;
border-bottom-right-radius:5px;
`

const DashMenu = styled.div`
width: 100%;
height: 60px;
color: #101010;
font-size: 16px;
display: flex;
gap: 34px;
align-items: center;
font-weight: 600;
`
const DashboardLayout=styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
min-height: 900px;
`
const DashboardWrapper = styled.div`
width: 100vw;
height: calc(100vh - 60px);
display: flex;
flex-direction: row;
background-color: ${blue3};
`
const SideBar = styled.div`
background-color: white;
border-right: 1px solid #dedede;
width:230px;
display: flex;
flex-direction: column;
align-items: center;
`