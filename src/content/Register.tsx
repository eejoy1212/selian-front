import { ArrowForwardIos } from '@mui/icons-material';
import * as React from 'react';
import styled from 'styled-components';
import { MainCard } from './UseInfo';
import TooltipSrc from '../images/Tooltip.png'
export interface IRegisterProps {
}

export function Register (props: IRegisterProps) {
  return (
    <MainCard>
        <RegCardContent>
        <TitleRow>
        <span>등록현황</span>
        <ArrowForwardIos style={{
            color:"#666666",
            width:"16px"
        }}/>
      </TitleRow>
      <TooltipRow>
        <TooltipWrapper>
            <TooltipPaper
                src={TooltipSrc}
            />
            <TooltipContent>  <YesterdayTitle>
                <strong>어제</strong>
            </YesterdayTitle>
            <span>529건이</span>
            <span>등록되었습니다.</span></TooltipContent>
          

        </TooltipWrapper>
         <TooltipWrapper>
            <TooltipPaper
                src={TooltipSrc}
            />
            <TooltipContent>  <TodayTitle>
                <strong>오늘</strong>
            </TodayTitle>
            <span>728건이</span>
            <span>등록되었습니다.</span></TooltipContent>
          

        </TooltipWrapper>
         <TooltipWrapper>
            <TooltipPaper
                src={TooltipSrc}
            />
            <TooltipContent>  <MonthTitle>
                <strong>한달</strong>
            </MonthTitle>
            <span>한달동안 2039건이</span>
            <span>등록되었습니다.</span></TooltipContent>
          

        </TooltipWrapper>
      </TooltipRow>
        </RegCardContent>
      
    </MainCard>
  );
}
const TooltipContent=styled.div`
width:162px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const YesterdayTitle = styled.div`
  color: #FEB305;
  font-size: 16px;

`;
const TodayTitle = styled.div`
  color: #FC6F21;
  font-size: 16px;

`;const MonthTitle = styled.div`
color: #335A97;
font-size: 16px;

`;
const TooltipRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 20px;
  gap: 35px;
`;

const TooltipPaper = styled.img`
  width: 100%;
  height: 100%;
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  width: 162px; /* 이미지의 크기에 맞게 조정 */
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: center;
  color: #333333;
  font-weight: 400;
  font-size: 22px;
  margin-top: 17px;
  margin-left: 17px;
`;

export const RegCardContent = styled.div`
  background-color: white;
  border: 1px solid #d9d9d9;
  margin: 10px 13px;
  display: flex;
  flex-direction: row; 
  gap: 13px;
  align-items: flex-start;
  justify-content: flex-start;
`;
