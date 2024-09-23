import * as React from 'react';
import styled from 'styled-components';
import { Dot, UseInfoTitle, UseInfoTitleRow } from './UseInfo';
import moment from 'moment';

export interface IAnnouncementProps {
}

export function Announcement(props: IAnnouncementProps) {
  
  const tempDatas = [
    { title: "[공지] 새로운 기능이 추가되었습니다.", regDate: new Date('2023-12-01') },
    { title: "[공지] 시스템 점검이 예정되어 있습니다.", regDate: new Date('2023-12-02') },
    { title: "[공지] 서비스 업데이트 안내", regDate: new Date('2023-12-03') },
    { title: "[공지] 서비스 이용약관 변경", regDate: new Date('2023-12-04') },
    { title: "[공지] 고객센터 운영시간 변경 안내", regDate: new Date('2023-12-05') },
    { title: "[공지] 보안 업데이트가 완료되었습니다.", regDate: new Date('2023-12-06') },
    { title: "[공지] 결제 시스템 오류 복구 안내", regDate: new Date('2023-12-07') },
    { title: "[공지] 로그인 문제 해결 안내", regDate: new Date('2023-12-08') },
    { title: "[공지] 신규 서비스 오픈 소식", regDate: new Date('2023-12-09') },
    { title: "[공지] 이벤트 참여 방법 안내", regDate: new Date('2023-12-10') },
    { title: "[공지] 서버 업그레이드 공지", regDate: new Date('2023-12-11') },
    { title: "[공지] 데이터 백업 완료 안내", regDate: new Date('2023-12-12') },
    { title: "[공지] 불편 사항 개선 안내", regDate: new Date('2023-12-13') },
    { title: "[공지] 긴급 점검 안내", regDate: new Date('2023-12-14') },
    { title: "[공지] 신규 기능 소개", regDate: new Date('2023-12-15') },
    { title: "[공지] 시스템 최적화 완료", regDate: new Date('2023-12-16') },
    { title: "[공지] 고객 서비스 안내", regDate: new Date('2023-12-17') },
    { title: "[공지] 2024년 서비스 개선 계획", regDate: new Date('2023-12-18') },
    { title: "[공지] 서비스 이용 정책 변경", regDate: new Date('2023-12-19') },
    { title: "[공지] 보안 점검 안내", regDate: new Date('2023-12-20') },
    { title: "[공지] 고객 감사 이벤트 안내", regDate: new Date('2023-12-21') },
    { title: "[공지] 데이터 처리 완료 공지", regDate: new Date('2023-12-22') },
    { title: "[공지] 새로운 고객 혜택 안내", regDate: new Date('2023-12-23') },
    { title: "[공지] 서비스 장애 복구 완료", regDate: new Date('2023-12-24') },
    { title: "[공지] 새로운 서비스를 오픈했습니다.", regDate: new Date('2023-12-25') },
    // 나머지 항목도 동일한 형식으로 추가
    { title: "[공지] 서비스 성능 향상 업데이트", regDate: new Date('2023-12-26') },
    { title: "[공지] 데이터 백업이 완료되었습니다.", regDate: new Date('2023-12-27') },
    { title: "[공지] 고객 센터 휴무 안내", regDate: new Date('2023-12-28') },
    { title: "[공지] 서비스 이용 불편 사항 수정", regDate: new Date('2023-12-29') },
    { title: "[공지] 이벤트 당첨자 발표", regDate: new Date('2023-12-30') },
    { title: "[공지] 긴급 공지 - 보안 이슈", regDate: new Date('2023-12-31') },
    { title: "[공지] 시스템 점검 완료", regDate: new Date('2024-01-01') },
  ]
  const [visibleData, setVisibleData] = React.useState(tempDatas.slice(0, 7)); // 처음에 7개만 보여줌
  const [count, setCount] = React.useState(7); // 현재 보이는 아이템 개수
  const scrollRef = React.useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        loadMoreItems();
      }
    }
  };

  const loadMoreItems = () => {
    const newCount = count + 7;
    setVisibleData(tempDatas.slice(0, newCount));
    setCount(newCount);
  };

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [count]);
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
          {/* <Indicators>
            <ActiveIndicator />
            <InActiveIndicator />
          </Indicators> */}
        </Tab>
        <UnselectedTab>TIP</UnselectedTab>
        <EmptyTab>DDD</EmptyTab>
        <WriteUl ref={scrollRef}>
          {visibleData.map((d, index) => (
            <WriteLi key={index}>
              <TitleCell>{d.title}</TitleCell>
              <DayCell>{moment(d.regDate).format('YYYY.MM.DD HH:mm')}</DayCell>
            </WriteLi>
          ))}
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
  width: 193.75px;
  height: 50px;
  border: none;
  background-color: white;
  border-right: 1px solid #d9d9d9;
`;

const UnselectedTab = styled.button`
  cursor: pointer;
  color: #101010;
  font-weight: 400;
  font-size: 20px;
  width: 193.75px;
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
