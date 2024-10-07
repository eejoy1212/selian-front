import * as React from 'react';
import styled from 'styled-components';
import { blue2, blue4, orange1 } from '../const/colors';
import RocketSrc from '../images/lcons/rocket.png'
import PlanSrc from '../images/lcons/plan.svg'
import { PlanIndicator } from '../components/indicator/PlanIndicator';
import { PlanDialog } from '../components/dialog/PlanDialog';

export interface UseInfoProps {
}

export function UseInfo(props: UseInfoProps) {
    const [openPlan,setOpenPlan]=React.useState(false)
    const onOpenPlan=()=>{
        setOpenPlan(true)
    }
    const onClosePlan=()=>{
        setOpenPlan(false)
    }
    return (
        <UseInfoWrapper>
            <PlanDialog open={openPlan} onClose={onClosePlan}/>
            {/* 타이틀 구간 */}
            <UseInfoTitleRow>
                <UseInfoTitle>
                    <Dot />
                    <span>이용정보</span>
                  
                </UseInfoTitle>
                <PlanRow>
                        <RocketIcon
                        src={RocketSrc}
                        />
                        <span>보너스 시간이 30% 더 많은 시니어 플랜으로</span>
                        <PlanBtn onClick={onOpenPlan}>플랜 업그레이드</PlanBtn>
                    </PlanRow>
            </UseInfoTitleRow>
        {/* 카드 */}
        <MainCard>
            <InfoCardContent>
                <PlanTitle>베이직 플랜</PlanTitle>
                <span
        style={{
            display:"flex",
            justifyContent:"flex-end",
         width:"calc(100% - 220px)",
         fontSize:"13px",
         color:"#8C8A8A"
        }}
        >30일 +  보너스 3일</span>
                <PlanIndicatorRow>
            
                    <PlanIcon
                    src={PlanSrc}
                    />
                    <PlanIndicator/>
                    <ExtensionBtn>연장하기</ExtensionBtn>
                </PlanIndicatorRow>
                <PlanAlarmTxt>
                    남은 시간은 
                    <Highlight>10일 4시간 25분</Highlight> 입니다.
                </PlanAlarmTxt>
            </InfoCardContent>
        </MainCard>
        </UseInfoWrapper>
    );
}
const PlanAlarmTxt=styled.div`
font-size: 20px;
color: #666666;
display: flex;
flex-direction:row;
margin-bottom: 20px;
`
const Highlight=styled.div`
color:${orange1}`
const ExtensionBtn=styled.button`
margin-left: 20px;
border-radius: 5px;
background-color: ${blue4};
color: white;
height: 30px;
border: none;
cursor: pointer;
`
const PlanIcon=styled.img`
width: 62px;
margin-right: 30px;
`
const PlanIndicatorRow=styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
margin-top: 0px;
`
const PlanTitle=styled.div`
margin-top:10px;
margin-bottom: 0px;
color: #333333;
font-size: 22px;
font-weight: 600;
`
export const MainCard=styled.div`
background-color: white;
border: 1px solid #E4E3E3;
`
export const InfoCardContent=styled.div`
background-color: white;
border: 1px solid #d9d9d9;
margin: 10px 13px;
display: flex;
flex-direction: column;
align-items: center;
`
const PlanBtn=styled.button`
margin-left: 27px;
border-radius: 5px;
background-color: ${blue4};
color: white;
height: 30px;
border: none;
cursor: pointer;
`
const RocketIcon=styled.img`
margin-right: 18px;
`
const PlanRow=styled.div`
display: flex;
align-items: center;
color: #333333;
font-size: 14px;
font-weight: 400;
`
export const UseInfoTitleRow = styled.div`
width:calc(100% - 22px);
margin-left: 22px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const Dot = styled.div`
width: 10px;
height:10px;
border-radius: 50%;
background-color: ${blue2};
`
export const UseInfoTitle = styled.div`
display: flex;
align-items: center;
gap: 16px;
font-size: 22px;
font-weight: 400;
`
const UseInfoWrapper = styled.div`
width: 775px;
height: 230px;
display: flex;
flex-direction: column;
gap: 12px;
`