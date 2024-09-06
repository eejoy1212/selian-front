import * as React from 'react';
import styled from 'styled-components';
import { CustomRadio } from '../components/Btn/CustomRadio';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, CloseSharp } from '@mui/icons-material';
import { CustomCheck } from '../components/Btn/CustomCheck';
import MemoSrc from '../images/market/memo.png'
import PadlockSrc from '../images/market/padlock.png'
import { CustomCheckbox } from '../components/Btn/CustomCheckbox';
import { InitBtn, RegisterChip, SearchBtn } from './BanManage';
export interface MarketRegisterProps {}

export function MarketRegister(props: MarketRegisterProps) {
  const [openUload,setOpenUpload]=React.useState(false)
  const [openMarketDialog,setOpenMarketDialog]=React.useState(false)
  const onClickOpenMarketDialog=()=>{
    setOpenMarketDialog(true)
  }
  const onClickCloseMarketDialog=()=>{
    setOpenMarketDialog(false)
  }
  const onOpenUpload=()=>{
    setOpenUpload(true)
  }
  const onCloseUpload=()=>{
    setOpenUpload(false)
  }
  return (

   <GiftCheckLayout>
      
 
      <SearchRow>
        <SearchTxt>검색어 입력</SearchTxt>
        <SearchInput placeholder='' />
       
        <CheckSet>
            <CustomCheckbox/>
            <span>이미지 표시</span>
        </CheckSet>
       
        
      </SearchRow>
      {/* 등록 마켓 */}
      <RegisterRow>
      <RegTxt>등록 마켓</RegTxt>
      <RegisterChips>
      <DelBtn>전체</DelBtn>
      <DelBtn>스마트 스토어</DelBtn>
      <DelBtn>G마켓</DelBtn>
      <DelBtn>쿠팡</DelBtn>
      <DelBtn>11번가</DelBtn>
      </RegisterChips>
      </RegisterRow>
      {/* 등록 일자 */}
      <RegisterRow>
      <RegTxt>등록일자</RegTxt>
      <RegisterChips>
      <RegisterChip>일주일</RegisterChip>
      <RegisterChip>한달</RegisterChip>
      <RegisterChip>두달</RegisterChip>
      <DateInput/>
        <RangeTxt>~</RangeTxt> 
        <DateInput/>
      </RegisterChips>
      </RegisterRow>
      {/* 고객유입량 */}
      <RegisterRow>
      <RegTxt>고객유입량</RegTxt>
     <NumberInput
     placeholder='숫자입력'
     /> 
     <span>번</span>
     <RadioSet>
      <span>이상</span>
      <CustomRadio checked/>
     </RadioSet>
     <RadioSet>
      <span>이하</span>
      <CustomRadio checked={false}/>
     </RadioSet>
<Flex/>
     <InitBtn>초기화</InitBtn>
<SearchMarketBtn
>검색</SearchMarketBtn>
      </RegisterRow>
      <GiftNumRow>
        <GiftToggles>   
        <GiftToggle>판매가 재설정</GiftToggle>
        <GiftToggle>배송비 재설정</GiftToggle>
        <GiftToggle>태그 재설정</GiftToggle>
        <GiftToggle>카테고리 재설정</GiftToggle>
        </GiftToggles>
     
        <Flex/>
        <GiftToggles>
        <GiftToggle>전체 상품 잠금</GiftToggle>
        <GiftToggle>선택상품 마켓 등록</GiftToggle>
        <GiftToggle>선택 상품 잠금</GiftToggle>
        <GiftToggle>선택상품 잠금해제</GiftToggle>
        <GiftToggle>선택상품 삭제</GiftToggle>
        </GiftToggles>
      
      </GiftNumRow>
      {/* 수집명 줄 */}
      <CollectRow>
      <CollectName>검색건수:0</CollectName>
      <Flex/>
      <ShowSelect>
      <option>
        10개씩보기
      </option>
      </ShowSelect>

      </CollectRow>
     
      <TableWrapper> 
      <TableContainer component={Paper} sx={{ boxShadow: 'none'}}>
        <Table 
        size='small'
        sx={{ minWidth: 1200,}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="center">선택</StyledTableCell>
              <StyledTableCell align="center">No.</StyledTableCell>
              <StyledTableCell align="center">잠금</StyledTableCell>
              <StyledTableCell align="center">메모</StyledTableCell>
              <StyledTableCell align="center">상품명</StyledTableCell>
              <StyledTableCell align="center">스마트스토어</StyledTableCell>
              <StyledTableCell align="center">쿠팡</StyledTableCell>
              <StyledTableCell align="center">11번가</StyledTableCell>
              <StyledTableCell align="center">옥션</StyledTableCell>
              <StyledTableCell align="center">G마켓</StyledTableCell>
              <StyledTableCell align="center">등록일자</StyledTableCell>
              <StyledTableCell align="center">삭제</StyledTableCell>
            </TableRow>
          </StyledTableHead>
         {/* 1.데이터가 있는경우 */}
         <TableBody
       
          >

           {rows2.map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { 
                  
                  border: 0 } }}
              >
                <TableCell align="center"
                
                scope="row">
                  <CustomCheck
                  checked={false}
                  />
                </TableCell>
                <TableCell align="center">{rows2.length-index}</TableCell>
                <TableCell align="center">
                  
                 {index===1? <IconButton>
                    <TableIcon src={PadlockSrc}/>
                  </IconButton>:<LockBtn>잠그기</LockBtn>}
                  </TableCell>
                <TableCell align="center">
                 <ShowBtn >보기</ShowBtn >
                 <IconButton>
                    <TableIcon src={MemoSrc}/>
                  </IconButton>
                </TableCell>
                <TableCell align="center">MT-001</TableCell>
                <TableCell align="center">154</TableCell>
                <TableCell align="center">154</TableCell>
                <TableCell align="center">154</TableCell>
                <TableCell align="center">154</TableCell>
                <TableCell align="center">154</TableCell>
                <TableCell align="center">2023.12.25 14:00</TableCell>
                <TableCell align="center"><DelBtn>삭제하기</DelBtn></TableCell>
              </TableRow>
            ))}
          </TableBody>
    
        </Table>     

        {/* 2.데이터가 없는 경우 */}
         {/* <NoDataPaper>
<span>수집중입니다.</span>
<span>수집률: 0%</span>
</NoDataPaper>  */}
        
      </TableContainer></TableWrapper>
   <PageBtnsWrapper>


   <PageBtns>
<ArrowBackIos sx={
    {
        width:"16px"
    }
}/>
<ActivePageBtn>1</ActivePageBtn>
<InactivePageBtn>2</InactivePageBtn>
<InactivePageBtn>3</InactivePageBtn>
<InactivePageBtn>4</InactivePageBtn>
<InactivePageBtn>5</InactivePageBtn>
<ArrowForwardIos sx={
    {
        width:"16px"
    }
}/>


</PageBtns>

   </PageBtnsWrapper>
    

    </GiftCheckLayout>
   
   
  );
}
const TableIcon=styled.img`
width: 26px;
`
const ShowSelect=styled.select`
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  font-size: 14px;
  border-radius: 5px;
  width: 111px;
  height: 30px;
  text-align: left;
  text-indent: 9px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
const SearchMarketBtn=styled.button`
cursor: pointer;
min-width: 96px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: white;
border: 1px solid #335A97;
background-color: #335A97;
`

const PageBtnsWrapper=styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-around;
`

const PageBtns=styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin-top: 26px;
`
const ActivePageBtn=styled.button`
width: 28px;
height: 28px;
background-color:#335A97;
font-size: 14px;
color: white;
border-radius: 50%;
border:none;
cursor: pointer;
`
const InactivePageBtn=styled.button`
color:#666666;
font-size: 14px;
cursor: pointer;
width: 28px;
height: 28px;
background-color: transparent;
border-radius: 50%;
border:none;
`
const GiftToggles=styled.div`
display: flex;
flex-direction: row;
gap: 15px;
`
const GiftToggle=styled.button`
border: 1px solid #bfbfbf;
font-size: 12px;
color: #555555;
background-color:#F2F2F2;
height: 30px;
border-radius: 5px;
cursor: pointer;
`
const GiftNumRow=styled.div`
margin-left: 62px;
margin-right: 62px;
display: flex;
flex-direction: row;
align-items: center;
`
const CollectName=styled.div`
font-weight: 500;
font-size: 16px;
color: #333333;

margin-right: 34px;
`
const CollectRow=styled.div`
margin-left: 62px;
margin-right: 62px;
display: flex;
flex-direction: row;
align-items: center;
`
const CheckSet=styled.div`
display:flex;
align-items: center;
gap: 11px;
font-size: 16px;
color: #333333;
`
const NumberInput=styled.input`
width: 103px;
height: 30px;
border-radius: 5px;
border: 1px solid #666666;
text-align: center;
margin-right: 12px;
`
const RangeTxt=styled.div`
font-size: 12px;
margin-left: 27px;
margin-right: 27px;
`
const DateInput=styled.input`
width: 135px;
height: 37px;
border-radius: 5px;
border: 1px solid #d9d9d9;
`
const DelBtn=styled.button`
cursor: pointer;
border: 1px solid #666666;
background-color: white;
color:#666666;
height: 30px;
font-size: 14px;
border-radius: 5px;
`
const LockBtn=styled.button`
cursor: pointer;
border: 1px solid #666666;
background-color: white;
color:#666666;
height: 30px;
min-width: 64px;
font-size: 14px;
border-radius: 5px;
`
const ShowBtn=styled.button`
cursor: pointer;
border: 1px solid #666666;
background-color: white;
color:#666666;
height: 30px;
min-width: 64px;
font-size: 14px;
border-radius: 5px;
`
const Flex=styled.div`
flex:1
`
const NoDataPaper=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
// position: absolute;
// top:50%;
// left: 60%;
height: 90%;
width:100%;
font-size: 16px;
color:#757575;
`
const TableWrapper = styled.div`
  width: calc(100% - 60px - 60px);
  margin-left: 60px;
  margin-right: 60px;
`;

const GiftCheckLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-width: 1400px;
  background-color: white;
`;
const RegisterChips=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 19px;
`
const RegisterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 66px;
  // margin-bottom: 21px;
`;
const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 45px;
  margin-bottom: 21px;
`;

const SearchTxt = styled.div`
  font-size: 16px;
  margin-left: 62px;
  margin-right: 72px;
`;
const RegTxt = styled.div`
  font-size: 16px;
  margin-left: 62px;
width: 156px
  `;
const SearchInput = styled.input`
  width: 470px;
  height: 37px;
  border: 1px solid #999999;
  border-radius: 5px;
  text-indent: 15px;
  margin-right: 27px;
`;

const RadioSet = styled.div`
  margin-left: 57px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  font-size: 13px;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  box-shadow: none; /* 그림자 제거 */
`;

const StyledTableCell = styled(TableCell)`
  border-top: 1px solid #6a6a6a;
`;

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
) {
  return { name, calories, fat, carbs };
}

const rows2 = [
  createData('데이터1', 159, 6.0, 24),
  createData('데이터2', 237, 9.0, 37),
  createData('데이터3', 262, 16.0, 24),
  createData('데이터4', 305, 3.7, 67),
  createData('데이터5', 356, 16.0, 49),
];
