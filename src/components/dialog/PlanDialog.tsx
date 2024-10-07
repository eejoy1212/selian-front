import { CheckCircle, CloseSharp } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../../content/AllGift';

export interface IPlanDialogProps {
    open:boolean;
    onClose:()=>void
}

export function PlanDialog ({open,onClose}: IPlanDialogProps) {
  return (
    <Dialog open={open}
    onClose={onClose}
    sx={{
     '& .MuiDialog-paper': {
         minWidth: '1087px'
     }
 }}
     >
<DialogTitle sx={{
       color:"black",
       fontWeight:700,
       display:"flex",
       alignItems:"center",
       justifyContent:"space-between"
       
     }}>
       <IconButton
       sx={{
         opacity:0,
         cursor:"default"
       }}
       >
         <CloseSharp sx={{
           width:"20px"
         }}/>
       </IconButton>
       <span>결제 플랜 선택</span>
       <IconButton
       
       onClick={onClose}>
         <CloseSharp sx={{
           width:"20px"
         }}/>
       </IconButton>
       </DialogTitle>
       <PlanRow>
{/* 미니 플랜 */}
<PlanTile>
 
 <PlanMini>MINI</PlanMini>
 <SaleTxt>₩ 15,000</SaleTxt>
 <PriceTxt>₩ 7,599</PriceTxt>
 <PerTxt>Per month</PerTxt>
 <CharacterUl>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F9D300"
     }}/>
     <span>특징 1</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F9D300"
     }}/>
     <span>특징 2</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F9D300"
     }}/>
     <span>특징 3</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F9D300"
     }}/>
     <span>특징 4</span>
   </CharacterLi>
 </CharacterUl>
 <Flex/>
 <PlanBtnRow>
 <PlanMiniBtn>Start Mini Plan</PlanMiniBtn>
 </PlanBtnRow>
</PlanTile>
{/* 베이직 플랜 */}
<PlanTile>
 
 <PlanBasic>BASIC</PlanBasic>
 <SaleTxt>₩ 25,000</SaleTxt>
 <PriceTxt>₩ 10,000</PriceTxt>
 <PerTxt>Per month</PerTxt>
 <CharacterUl>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F97400"
     }}/>
     <span>특징 1</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F97400"
     }}/>
     <span>특징 2</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F97400"
     }}/>
     <span>특징 3</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F97400"
     }}/>
     <span>특징 4</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F97400"
     }}/>
     <span>특징 5</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#F97400"
     }}/>
     <span>특징 6</span>
   </CharacterLi>
 </CharacterUl>
 <Flex/>
 <PlanBtnRow>
 <PlanBasicBtn>Start Basic Plan</PlanBasicBtn>
 </PlanBtnRow>
</PlanTile>
{/* 디럭스 플랜 */}
<PlanTile>
 
 <PlanDelux>DELUXE</PlanDelux>
 <SaleTxt>₩ 50,000</SaleTxt>
 <PriceTxt>₩ 20,000</PriceTxt>
 <PerTxt>Per month</PerTxt>
 <CharacterUl>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#335A97"
     }}/>
     <span>특징 1</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#335A97"
     }}/>
     <span>특징 2</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#335A97"
     }}/>
     <span>특징 3</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#335A97"
     }}/>
     <span>특징 4</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#335A97"
     }}/>
     <span>특징 5</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#335A97"
     }}/>
     <span>특징 6</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#335A97"
     }}/>
     <span>특징 7</span>
   </CharacterLi>
 </CharacterUl>
 <Flex/>
 <PlanBtnRow>
 <PlanDeluxBtn>Start Deluxe Plan</PlanDeluxBtn>
 </PlanBtnRow>
</PlanTile>
{/* 프로 플랜 */}
<PlanTile>
 
 <PlanPro>PRO</PlanPro>
 <SaleTxt>₩ 120,000</SaleTxt>
 <PriceTxt>₩ 40,000</PriceTxt>
 <PerTxt>Per month</PerTxt>
 <CharacterUl>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 1</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 2</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 3</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 4</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 5</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 6</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 7</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 8</span>
   </CharacterLi>
   <CharacterLi>
     <CheckCircle sx={{
       color:"#101010"
     }}/>
     <span>특징 9</span>
   </CharacterLi>
 </CharacterUl>
 <Flex/>
 <PlanBtnRow>
 <PlanProBtn>Start Pro Plan</PlanProBtn>
 </PlanBtnRow>
</PlanTile>
       </PlanRow>
     </Dialog>
  );
}
const PlanRow=styled.div`
display: flex;
flex-direction: row;
border-top: 1px solid #e4e4e9;
`
const PlanBtnRow=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 58px;
`
const PlanProBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #101010;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`
const PlanDeluxBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #335A97;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`
const PlanBasicBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #F97400;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`

const PlanMiniBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #F9D300;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`
const CharacterLi=styled.li`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
color: #868A92;
font-size: 14px;
font-weight: 700;
`
const CharacterUl=styled.ul`
margin: 0;
padding: 0;
margin-left: 37px;
display: flex;
flex-direction: column;
gap: 12px; 
`
const PerTxt=styled.div`
font-size: 13px;
font-weight: 700;
color: #868A92;
margin-left: 39px;
margin-bottom: 34px;
`
const PriceTxt=styled.div`
font-size: 26px;
font-weight: 700;
color: #666666;
margin-left: 39px;
margin-bottom: 5px;
`
const SaleTxt=styled.div`
text-decoration: line-through;
color: #f88383;
font-size: 14px;
margin-left: 74px;
`
const PlanTile=styled.div`
display: flex;
flex-direction: column;
width: 275px;
height: 700px;
border-right: 1px solid #E4E4E9;
`
const PlanPro=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #101010;
margin-bottom: 18px;
`
const PlanDelux=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #335A97;
margin-bottom: 18px;
`
const PlanBasic=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #F97400;
margin-bottom: 18px;
`
const PlanMini=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #F9D300;
margin-bottom: 18px;
`
