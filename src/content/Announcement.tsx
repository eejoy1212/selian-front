import * as React from 'react';
import styled from 'styled-components';
import { Dot, UseInfoTitle, UseInfoTitleRow } from './UseInfo';

export interface IAnnouncementProps {
}

export function Announcement(props: IAnnouncementProps) {
  return (
    <AnnouncementWrapper>
      {/* 타이틀 구간 */}
      <UseInfoTitleRow>
        <UseInfoTitle>
          <Dot />
          <span>공지사항</span>
        </UseInfoTitle>
      </UseInfoTitleRow>
      {/* 글 목록 */}
      <TableWrapper>

        <Tab>
          <span>공지사항</span>
          <Indicators>
            <ActiveIndicator />
            <InActiveIndicator />
          </Indicators>
        </Tab>
        <UnselectedTab>TIP</UnselectedTab>
        <EmptyTab>DDD</EmptyTab>
        <WriteUl>

  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
  <WriteLi>
  <TitleCell>[공지] 새로운 서비스를 오픈했습니다.</TitleCell>
  <DayCell>2023.12.25 14:00</DayCell>
  </WriteLi>
</WriteUl>
      </TableWrapper>

    </AnnouncementWrapper>
  );
}
const TitleCell=styled.div`
text-indent: 50px;
width: 100%;
font-size: 16px;
color: #666666;
`
const DayCell=styled.div`
width: 160px;
font-size: 14px;
color: #666666;
`
const WriteUl=styled.ul`
overflow-Y:scroll;
list-style: none;
padding:0;
margin:0;
width: 100%;
height: calc(100% - 50px);
`
const WriteLi=styled.li`
display: flex;
flex-direction: row;
width: 100%;
height: 50px;
align-items: center;
border-bottom: 1px solid #e4e4e9;
`
const Indicators = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  position: absolute;
  bottom: 16px;
  right: 27px;
`;

const ActiveIndicator = styled.div`
  background-color: #335A97;
  width: 7px;
  height: 7px;
  border-radius: 50%;
`;
const InActiveIndicator = styled.div`
  background-color: #d9d9d9;
  width: 7px;
  height: 7px;
  border-radius: 50%;
`;
const Tab = styled.button`
  position: relative;
  color: #101010;
  font-weight: 400;
  font-size: 20px;
  width: 258px;
  height: 50px;
  border: none;
  background-color: white;
  border-right: 1px solid #d9d9d9;
`;

const UnselectedTab = styled.button`
  color: #101010;
  font-weight: 400;
  font-size: 20px;
  width: 258px;
  height: 50px;
  border: none;
  background-color: #f9f9f9;
  border-right: 1px solid #d9d9d9;
`;

const EmptyTab = styled.button`
  width: 258px;
  height: 50px;
  border: none;
  color: transparent;
  background-color: #f9f9f9;
`;

const TableWrapper = styled.div`
  width: 775px;
  background-color: white;
  border: 1px solid #d9d9d9;
  height: 360px;
  overflow: hidden;
`;

const AnnouncementWrapper = styled.div`
  width: 775px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
