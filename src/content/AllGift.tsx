import * as React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { CustomCheck } from '../components/Btn/CustomCheck';
import { IoClose } from 'react-icons/io5';
import { OptionRow } from './GiftCheck';
import { CollectName, ShowSelect } from './MarketRegister';
export interface AllGiftProps {}

export function AllGift(props: AllGiftProps) {
    const [openDetail,setOpenDetail]=React.useState(false)
    const [openSearch,setOpenSearch]=React.useState(false)
    const onClickOpenDetail=()=>{
    setOpenDetail(true)
  }
  const onClickCloseDetail=()=>{
    setOpenDetail(false)
  }
  const onClickOpenSearch=()=>{
    setOpenSearch(true)
  }
  const onClickCloseSearch=()=>{
    setOpenSearch(false)
  }


  return (

   <GiftCheckLayout>
     {/* 상품명 상세정보 창-1 */}
     <Dialog open={openDetail}
       sx={{
        '& .MuiDialog-paper': {
            minWidth: '1435px'
        }
    }}
     >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
        <IconButton
          disabled
          sx={{
            cursor: "default",
            opacity: 0
          }}
        >
          <IoClose />
        </IconButton>
            <span>[상품명] 상세정보</span>
            <IconButton
onClick={onClickCloseDetail}

        >
          <IoClose />
        </IconButton>
        </DialogTitle>
       
       
        <DialogContent
 
        >
             <DetailSubTitle>상품정보</DetailSubTitle>
 {/* 다이얼로그 테이블 1 */}
        
            <TableContainer 
            variant='elevation'
            component={Paper}>
        <Table 
        sx={{ minWidth: 1200,}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="center">태그</StyledTableCell>
              <StyledTableCell align="center">등록마켓</StyledTableCell>
              <StyledTableCell align="center">소싱사이트</StyledTableCell>
              <StyledTableCell align="center">글자수</StyledTableCell>
              <StyledTableCell align="center">수집명</StyledTableCell>
              <StyledTableCell align="center">상품명</StyledTableCell>
              <StyledTableCell align="center">카테고리</StyledTableCell> 
              <StyledTableCell align="center">상품현황</StyledTableCell>
        
            </TableRow>
          </StyledTableHead>
         {/* 1.데이터가 있는경우 */}
         <TableBody
       
          >

           {rows2.slice(0,1).map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { 
                  
                  border: 0 } }}
              >
              
                <TableCell align="center">태그</TableCell>
                <TableCell align="center">
                G마켓
                </TableCell>
                <TableCell align="center">알리익스프레스</TableCell>
                <TableCell align="center">49</TableCell>
                <TableCell align="center">아마존 원피스001</TableCell>
                <TableCell align="center">상품명</TableCell>
                <TableCell align="center">카테고리</TableCell>
                <TableCell align="center">등록완료</TableCell>
           

              </TableRow>
            ))}
          </TableBody>
    
        </Table>     </TableContainer>
        <DialogTableGap/>
         {/* 다이얼로그 테이블 2 */}
       <TableContainer component={Paper} sx={{ boxShadow: 'none'}}>
        <Table sx={{ minWidth: 1200,}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="center">원가</StyledTableCell>
              <StyledTableCell align="center">관세</StyledTableCell>
              <StyledTableCell align="center">판매가</StyledTableCell>
              <StyledTableCell align="center">중간마진</StyledTableCell>
              <StyledTableCell align="center">배송비</StyledTableCell>
              <StyledTableCell align="center">마켓수수료</StyledTableCell>
              <StyledTableCell align="center">최종마진</StyledTableCell> 
              <StyledTableCell align="center"></StyledTableCell>
        
            </TableRow>
          </StyledTableHead>
         {/* 1.데이터가 있는경우 */}
         <TableBody
       
          >

           {rows2.slice(0,1).map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { 
                  
                  border: 0 } }}
              >
              
                <TableCell align="center">12,5000</TableCell>
                <TableCell align="center">
                0
                </TableCell>
                <TableCell align="center">21,000</TableCell>
                <TableCell align="center">8,500</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">수집중</TableCell>
                <TableCell align="center">6,000</TableCell>
                <TableCell align="center"></TableCell>
           

              </TableRow>
            ))}
          </TableBody>
    
        </Table>     </TableContainer>
             <ImgBtnRow>
        <ImgAddBtn>+</ImgAddBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>

        </ImgBtnRow> 
              <ConfirmBtnRow>
        <ConfirmBtn>확인</ConfirmBtn>

        </ConfirmBtnRow>
        </DialogContent>

     </Dialog>
     {/* 상품명 상세정보 창-2 */}
     <Dialog open={openSearch}
       sx={{
        '& .MuiDialog-paper': {
            minWidth: '1435px'
        }
    }}
     >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
        <IconButton
          disabled
          sx={{
            cursor: "default",
            opacity: 0
          }}
        >
          <IoClose />
        </IconButton>
            <span>[상품명] 상세정보</span>
            <IconButton
onClick={onClickCloseSearch}

        >
          <IoClose />
        </IconButton>
        </DialogTitle>
       
       
        <DialogContent
 
        >
             <DetailSubTitle>상품정보</DetailSubTitle>
 {/* 다이얼로그 테이블 1 */}
        
            <TableContainer
            variant='elevation'
            component={Paper} >
        <Table sx={{ minWidth: 1200,}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="center">태그</StyledTableCell>
              <StyledTableCell align="left">등록마켓</StyledTableCell>
              <StyledTableCell align="center">소싱사이트</StyledTableCell>
              <StyledTableCell align="center">글자수</StyledTableCell>
              <StyledTableCell align="center">수집명</StyledTableCell>
              <StyledTableCell align="center">상품명</StyledTableCell>
              <StyledTableCell align="center">카테고리</StyledTableCell> 
              <StyledTableCell align="center">상품현황</StyledTableCell>
        
            </TableRow>
          </StyledTableHead>
         {/* 1.데이터가 있는경우 */}
         <TableBody
       
          >

           {rows2.slice(0,1).map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { 
                  
                  border: 0 } }}
              >
              
                <TableCell align="center">
                   태그
                    </TableCell>
                <TableCell align="center">
               <RegisterMarketCellUl>
                <RegisterMarketCellLi>
                    <CustomCheck
                    checked
                    />
                    <span>G마켓</span>
                </RegisterMarketCellLi>
                <RegisterMarketCellLi>
                    <CustomCheck
                    checked
                    />
                    <span>G마켓</span>
                </RegisterMarketCellLi>
                <RegisterMarketCellLi>
                    <CustomCheck
                    checked
                    />
                    <span>G마켓</span>
                </RegisterMarketCellLi>
               </RegisterMarketCellUl>
                </TableCell>
                <TableCell align="center">알리익스프레스</TableCell>
                <TableCell align="center">49</TableCell>
                <TableCell align="center">아마존 원피스001</TableCell>
                <TableCell align="center"><GiftNameChip>상품명</GiftNameChip></TableCell>
                <TableCell align="center">카테고리</TableCell>
                <TableCell align="center">등록완료</TableCell>
           

              </TableRow>
            ))}
          </TableBody>
    
        </Table>     </TableContainer>
        <DialogTableGap/>
        <DetailSubTitle>가격정보</DetailSubTitle>
<TableRowWrapper>
    <MarginTemplateCol>
        <MarginTemplateTitle>마진 템플릿 선택</MarginTemplateTitle>
        <MarginTemplateSelect>
            <option>마진 템플릿1</option>
        </MarginTemplateSelect>
    </MarginTemplateCol>
     {/* 다이얼로그 테이블 2 */}
     <TableContainer 
     variant='elevation'
     component={Paper} >
        <Table sx={{ minWidth: 893,}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="center">원가</StyledTableCell>
              <StyledTableCell align="center">관세</StyledTableCell>
              <StyledTableCell align="center">판매가</StyledTableCell>
              <StyledTableCell align="center">중간마진</StyledTableCell>
              <StyledTableCell align="center">배송비</StyledTableCell>
              <StyledTableCell align="center">마켓수수료</StyledTableCell>
              <StyledTableCell align="center">최종마진</StyledTableCell> 
        
            </TableRow>
          </StyledTableHead>
         {/* 1.데이터가 있는경우 */}
         <TableBody
       
          >

           {rows2.slice(0,1).map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { 
                  
                  border: 0 } }}
              >
              
                <TableCell align="center">12,5000</TableCell>
                <TableCell align="center">
                0
                </TableCell>
                <TableCell align="center">21,000</TableCell>
                <TableCell align="center">8,500</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">수집중</TableCell>
                <TableCell align="center">6,000</TableCell>
           

              </TableRow>
            ))}
          </TableBody>
    
        </Table>     </TableContainer>
</TableRowWrapper>
        
             <ImgBtnRow>
        <ImgAddBtn>+</ImgAddBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>

        </ImgBtnRow> 
              <ConfirmBtnRow>
        <ConfirmBtn>확인</ConfirmBtn>

        </ConfirmBtnRow>
        </DialogContent>

     </Dialog>
      <SearchRow>
        <SearchTxt>검색어 입력</SearchTxt>
        <SearchInput placeholder='' />
        <RegisterMarketTxt>등록 마켓</RegisterMarketTxt>
        <InActiveToggle>전체</InActiveToggle>
        <InActiveToggle>스마트 스토어</InActiveToggle>
        <ActiveToggle>G마켓</ActiveToggle>
        <InActiveToggle>쿠팡</InActiveToggle>
        <InActiveToggle>11번가</InActiveToggle>
   

      </SearchRow>
      <DateSearchRow>
      <RegisterDateTxt>등록일자:</RegisterDateTxt>
        <DateInput/>
        <RangeTxt>~</RangeTxt> 
        <DateInput/>
        <DateGap/>
        <RegisterStatusTxt>등록 상태</RegisterStatusTxt>
        <InActiveToggle>전체</InActiveToggle>
        <InActiveToggle>등록완료</InActiveToggle>
        <ActiveToggle>등록대기</ActiveToggle>
        <InActiveToggle>삭제</InActiveToggle>
      </DateSearchRow>
      <SourcingSearchRow>
<SourcingSearchTxt>소싱 사이트별 조회</SourcingSearchTxt>
<SourcingSearchSelect>
    <option>아마존</option>
</SourcingSearchSelect>
      </SourcingSearchRow>
      {/* 검색버튼 줄 */}
      <SearchBtnRow>
     
           <InitBtn>초기화</InitBtn>
<SearchBtn
onClick={onClickOpenSearch}
>검색</SearchBtn>


      </SearchBtnRow>
      {/* 토글 줄 */}
    
      <ToggleRow>
      <GiftToggle>판매가 재설정</GiftToggle>
      <GiftToggle>배송비 재설정</GiftToggle>
      <GiftToggle>태그 재설정</GiftToggle>
      <GiftToggle>카테고리 재설정</GiftToggle>
      <Flex/>
      <GiftToggle>전체 상품 잠금</GiftToggle>
      <GiftToggle>선택상품 마켓 등록</GiftToggle>
      <GiftToggle>선택 상품 잠금</GiftToggle>
      <GiftToggle>선택상품 잠금해제</GiftToggle>
      <GiftToggle>선택상품 삭제</GiftToggle>

      </ToggleRow>
      {/* 검색건수 줄 */}

      <OptionRow>
      <CollectName>검색건수:0</CollectName>
           <Flex/>
        <ShowSelect>
      <option>
        10개씩보기
      </option>
      </ShowSelect></OptionRow>
      <TableWrapper> 
      <TableContainer 
      variant='elevation'
    
      component={Paper} >
        <Table 
        size='small'
     
     aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="left">선택</StyledTableCell>
              <StyledTableCell align="left">No.</StyledTableCell>
              <StyledTableCell align="center">태그</StyledTableCell>
              <StyledTableCell align="center">등록마켓</StyledTableCell>
              <StyledTableCell align="center">소싱사이트</StyledTableCell>
              <StyledTableCell align="center">글자수</StyledTableCell>
              <StyledTableCell align="center">수집명</StyledTableCell> 
              <StyledTableCell align="center">상품명</StyledTableCell>
              <StyledTableCell align="center">카테고리</StyledTableCell>
              <StyledTableCell align="center">상품현황</StyledTableCell>
              <StyledTableCell align="center">상세보기</StyledTableCell>
              <StyledTableCell align="center">URL</StyledTableCell>
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
                <TableCell align="left"
                
                scope="row">
                  <CustomCheck
                  checked={false}
                  />
                </TableCell>
                <TableCell align="left">{rows2.length-index}</TableCell>
                <TableCell align="left">태그</TableCell>
                <TableCell align="center">
                스마트스토어/옥션
                </TableCell>
                <TableCell align="center">알리익스프레스</TableCell>
                <TableCell align="center">49</TableCell>
                <TableCell align="center">MT-001</TableCell>
                <TableCell align="center">MT-001</TableCell>
                <TableCell align="center">카테고리</TableCell>
                <TableCell align="center">등록완료</TableCell>
           
                <TableCell align="center"><DelBtn
                onClick={onClickOpenDetail}
                >상세보기</DelBtn></TableCell>
                <TableCell align="center"><LinkBtn>링크열기</LinkBtn></TableCell>

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
    
<LastGap/>
    </GiftCheckLayout>
   
   
  );
}

const MarginTemplateSelect=styled.select`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 14px;
  border-radius: 5px;
  width: 166px;
  height: 26px;
  text-align: left;
  text-indent: 28px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
const MarginTemplateCol=styled.div`
display: flex;
flex-direction: column;
gap: 31px;

`
const MarginTemplateTitle=styled.div`
display: flex;
flex-direction: column;
font-size: 15px;
color: #101010;
`
const TableRowWrapper=styled.div`
margin-left: 29px;
margin-right: 29px;
display: flex;
flex-direction: row;
align-items: center;
gap: 148px;
`
const GiftNameChip=styled.div`
background-color: #f3f3f3;
height: 26px;
max-width: 130px;
border-radius: 5px;
font-size: 15px;
color: #101010;
display: flex;
align-items: center;
justify-content: center;
`
const RegisterMarketCellLi=styled.li`
display: flex;
flex-direction: row;
align-items: center;
gap: 23px;
`
const RegisterMarketCellUl=styled.ul`
list-style: none;
margin:0;
padding:0;
display: flex;
flex-direction: column;
gap: 14px;
`
const ImgBtnRow=styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
margin-bottom: 47px;
`
const DialogTableGap=styled.div`

height: 50px;
`
const DetailSubTitle=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 29px;
margin-bottom: 28px;
`
const LastGap=styled.div`
height: 50px;

`
const SearchResult=styled.span`
margin-left: 62px;
margin-bottom: 22px;
font-size: 16px;
`
const ToggleRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
margin-left: 62px;
margin-right: 62px;
margin-top: 34px;
margin-bottom: 36px;
`
const InitBtn=styled.button`
min-width: 30px;
height: 30px;
border-radius: 5px;
border: 1px solid #666666;
color: #666666;
background-color: white;
cursor: pointer;
margin-right: 20px;
`
const SourcingSearchSelect=styled.select`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 14px;
  border-radius: 5px;
  width: 152px;
  height: 37px;
  text-align: left;
  text-indent: 17px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
const SourcingSearchTxt = styled.div`
  font-size: 16px;
  margin-right: 14px;
`;
const SourcingSearchRow = styled.div`
    margin-left: 62px;
    margin-right: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: 8px;
`;
const DateGap=styled.div`
width: 178px;
`
const RegisterDateTxt = styled.div`
  font-size: 16px;
  margin-right: 38px;
`;
const InActiveToggle=styled.button`
border-radius: 5px;
border: 1px solid #666666;
color: #666666;
height: 30px;
background-color: white;
cursor: pointer;
font-size: 14px;
min-width: 64px;
margin-right: 19px;
`
const ActiveToggle=styled.button`
border-radius: 5px;
border: 1px solid #666666;
color: #666666;
height: 30px;
background-color: #E9E7E7;
cursor: pointer;
font-size: 14px;
min-width: 64px;
margin-right: 19px;
`

export const PageBtnsWrapper=styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-around;
`

export const PageBtns=styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin-top: 26px;
`
export const ActivePageBtn=styled.button`
width: 28px;
height: 28px;
background-color:#335A97;
font-size: 14px;
color: white;
border-radius: 50%;
border:none;
cursor: pointer;
`
export const InactivePageBtn=styled.button`
color:#666666;
font-size: 14px;
cursor: pointer;
width: 28px;
height: 28px;
background-color: transparent;
border-radius: 50%;
border:none;
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
const SearchBtnRow=styled.div`
margin-bottom: 10px;
margin-left: 62px;
margin-right: 62px;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`
const ConfirmBtnRow=styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: center;
`
const ConfirmBtn=styled.button`
cursor: pointer;
width: 536px;
background-color:#37508B;
height: 40px;
font-weight: 700;
font-size: 16px;
border-radius: 8px;
border: none;
color: white;
`
const ImgAddBtn=styled.button`
margin-right: 10px;
border: 1px solid #C2C2C2;
width: 100px;
height: 100px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
background-color: white;
cursor: pointer;
color: #666666;
`

const ImgBtn=styled.button`
margin-right: 10px;
border: 1px solid #F4F4F4;
width: 100px;
height: 100px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 16px;
background-color: #F4F4F4;
cursor: pointer;
color: #B9B8B8;
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
const LinkBtn=styled.button`
cursor: pointer;
border: 1px solid #666666;
background-color: #E8E8E8;
color:#666666;
height: 30px;
font-size: 14px;
border-radius: 5px;
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
export const Flex=styled.div`
flex:1
`
const SearchBtn=styled.button`
cursor: pointer;
min-width: 96px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: white;
border: 1px solid #335A97;
background-color: #335A97;
`
const TableWrapper = styled.div`
  width: calc(100% - 60px - 60px);
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 20px;
`;


const GiftCheckLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
  background-color: white;
`;

const SearchRow = styled.div`
  margin-left: 62px;
  margin-right: 62px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 45px;
`;
const DateSearchRow = styled.div`
  margin-left: 62px;
  margin-right: 62px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;
const RegisterMarketTxt = styled.div`
  font-size: 16px;
  margin-left: 21px;
  margin-right: 37px;
`;
const RegisterStatusTxt = styled.div`
  font-size: 16px;
  margin-left: 3px;
  margin-right: 37px;
`;
const SearchTxt = styled.div`
  font-size: 16px;
  margin-right: 21px;
`;

const SearchInput = styled.input`
  width: 470px;
  height: 37px;
  border: 1px solid #999999;
  border-radius: 5px;
  text-indent: 15px;
  margin-right: 27px;
`;


export const StyledTableHead = styled(TableHead)`
  background-color: #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  // box-shadow: none; /* 그림자 제거 */
`;

export const StyledTableCell = styled(TableCell)`
  // border-top: 1px solid #6a6a6a;
  font-weight: bold !important; 
`;

export function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
) {
  return { name, calories, fat, carbs };
}

export const rows2 = [
  createData('데이터1', 159, 6.0, 24),
  createData('데이터2', 237, 9.0, 37),
  createData('데이터3', 262, 16.0, 24),
  createData('데이터4', 305, 3.7, 67),
  createData('데이터5', 356, 16.0, 49),
];
