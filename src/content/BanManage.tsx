import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { ActivePageBtn, InactivePageBtn, PageBtns, PageBtnsWrapper, rows2, StyledTableCell, StyledTableHead } from './AllGift';
import { CustomCheck } from '../components/Btn/CustomCheck';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { ExcelUploadDialog } from '../components/dialog/ExcelUploadDialog';
import { useNavigate } from 'react-router-dom';
export interface IBanManageProps {
}
export function BanManage (props: IBanManageProps) {
  const navigate=useNavigate()
  const [openUpload,setOpenUpload]=React.useState(false)
  const onClickOpenUpload=()=>{
    setOpenUpload(true)
  }
  const onClickCloseUpload=()=>{
    setOpenUpload(false)
  }
    return (
    <BanManageLayout>
        {/* 엑셀업로드 창 */}
        <ExcelUploadDialog
        openUload={openUpload}
        onCloseUpload={onClickCloseUpload}
        />
      <BanManageTabs>
      <BanManageActiveTab>금지어관리</BanManageActiveTab>
      <BanManageInActiveTab
       onClick={() => {
        navigate('/ban-brand-manage');
      }}
      >금지 브랜드 관리</BanManageInActiveTab>
      </BanManageTabs>
      <BanManagePaper>
        <FilterRow>
            {/* 왼쪽 추가 구간 */}
<AddCol>
    <BanTemplateTitle>금지어 템플릿 선택</BanTemplateTitle>
<SelectRow>
    <BanListSelect>
        <option>금지어 리스트 1</option>
    </BanListSelect>
    <AddBtn>템플릿 추가</AddBtn>
</SelectRow>
<BanTemplateTitle>금지어 추가</BanTemplateTitle>
<SelectRow>
    <BanListInput/>
    <AddBtn>추가</AddBtn>
</SelectRow>
</AddCol>
        {/* 오른쪽 검색구간 */}
        <SearchCol>
        <SearchRow>
    <span>금지어 검색:</span>
<SearchInput/>
</SearchRow>
<RegisterRow>
    <span>등록일자:</span>
    <RegisterChip>오늘</RegisterChip>
    <RegisterChip>일주일</RegisterChip>
    <RegisterChip>한달</RegisterChip>
    <RegisterChip>두달</RegisterChip>
    <DateRow>
    <DateInput/>
        <RangeTxt>~</RangeTxt> 
        <DateInput/>
    </DateRow>

</RegisterRow>

        </SearchCol>



        </FilterRow>
        {/* 검색 버튼 구간 */}
        <SearchBtnRow>
     
     <InitBtn>초기화</InitBtn>
<SearchBtn
>검색</SearchBtn>


</SearchBtnRow>
{/* 테이블 */}
<TableWrapper> 
      <TableContainer 
      variant='elevation'
      component={Paper} >
        <Table 
        size='small'
        sx={{ minWidth: 1200,minHeight:320}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="center">선택</StyledTableCell>
              <StyledTableCell align="center">No.</StyledTableCell>
              <StyledTableCell align="center">금지어</StyledTableCell>
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
                  checked={true}
                  />
                </TableCell>
                <TableCell align="center">{rows2.length-index}</TableCell>
                <TableCell align="center">금지어</TableCell>
                <TableCell align="center">
                2023.12.25 14:00
                </TableCell>
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
<TableBtnsRow>
<SelDelBtn>선택 금지어 삭제</SelDelBtn>
<ExcelAddBtn
onClick={onClickOpenUpload}
>엑셀 파일로 추가하기</ExcelAddBtn>
<ExcelDownloadBtn>엑셀파일 다운로드</ExcelDownloadBtn>
</TableBtnsRow>
      </BanManagePaper>
      <EditBtnRow>
      <SelDelBtn>수정사항 초기화</SelDelBtn>
      <ExcelAddBtn>수정사항 저장</ExcelAddBtn>
      </EditBtnRow>
    </BanManageLayout>
  );
}
export const DelBtn=styled.button`
cursor: pointer;
border: 1px solid #666666;
background-color: white;
color:#666666;
height: 30px;
font-size: 14px;
border-radius: 5px;
`
export const EditBtnRow=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 52px;
margin-top: 20px;
`
export const SelDelBtn=styled.button`
min-width: 120px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: #335A97;
border: 1px solid #335A97;
background-color: white;
margin-right: 15px;
`
export const ExcelAddBtn=styled.button`
min-width: 134px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: white;
border: 1px solid #335A97;
background-color: #335A97;
margin-right: 15px;
`
export const ExcelDownloadBtn=styled.button`
min-width: 134px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: white;
border: 1px solid #1F7145;
background-color: #1F7145;
margin-right: 15px;
`
export const TableBtnsRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
margin-bottom: 18px;
margin-top: -28px;
`
export const TableWrapper = styled.div`
  width: calc(100% - 32px - 32px);
  margin-left: 32px;
  margin-right: 32px;
`;

export const SearchBtn=styled.button`
cursor: pointer;
min-width: 65px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: white;
border: 1px solid #335A97;
background-color: #335A97;
`
export const InitBtn=styled.button`
min-width: 65px;
height: 30px;
border-radius: 5px;
border: 1px solid #335A97;
color: #335A97;
background-color: white;
cursor: pointer;
margin-right: 29px;
`
export const SearchBtnRow=styled.div`
margin-left: 52px;
margin-bottom: 27px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
export const RangeTxt=styled.div`
font-size: 12px;

`
export const DateRow=styled.div`
display: flex;
flex-direction: row;
gap: 19px;
align-items: center;
`
export const DateInput=styled.input`
width: 143px;
height: 37px;
border-radius: 5px;
border: 1px solid #999999;
`
export const RegisterChip=styled.button`
border-radius: 5px;
background-color: #e6eefa;
min-width: 94px;
border: none;
height: 30px;
color: #335A97;
font-size: 14px;
cursor: pointer;
`
export const RegisterRow=styled.div`
display: flex;
flex-direction: row;
gap: 25px;
align-items: center;
font-size: 16px;
font-weight: 600;
color: #333333;
`
export const SearchInput=styled.input`
width: 470px;
height: 37px;
border: 1px solid #999999;
border-radius: 5px;
`
export const SearchRow=styled.div`
display: flex;
flex-direction: row;
gap: 13px;
align-items: center;
font-size: 16px;
font-weight: 600;
color: #333333;
`
export const AddBtn=styled.button`
cursor: pointer;
height: 37px;
background-color: #335A97;
width: 103px;
border: none;
border-radius: 5px;
font-size: 14px;
color: white;
`
export const SelectRow=styled.div`
display: flex;
flex-direction: row;
gap: 23px;
align-items: center;
`

export const SearchCol=styled.div`
display: flex;
flex-direction: column;
gap: 32px;

`
export const AddCol=styled.div`
display: flex;
flex-direction: column;
gap: 15px;

`
export const FilterRow=styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
gap: 92px;
margin-left: 33px;
margin-top: 38px;
margin-bottom: 36px;
`
export const BanListInput=styled.input`
  background-color: white;
  border: 1px solid #999999;
  color: #999999;
  width: 211px;
  font-size: 16px;
  border-radius: 5px;
  height: 37px;
  text-align: left;
  text-indent: 17px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
export const BanListSelect=styled.select`
  background-color: white;
  border: 1px solid #999999;
  color: #999999;
  width: 211px;
  font-size: 16px;
  border-radius: 5px;
  height: 37px;
  text-align: left;
  text-indent: 17px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
export const BanTemplateTitle=styled.div`
color: #333333;
font-size: 16px;
font-weight: 600;
`
export const BanManageLayout=styled.div`
display: flex;
flex-direction: column;
margin-top: 41px;
margin-left: 32px;
margin-right: 32px;
min-height: calc(100vh - 60px - 42px);
width: calc(100% - 32px - 32px); 
`
export const BanManageTabs=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`
export const BanManageActiveTab=styled.button`
min-width: 200px;
height: 49px;
border: none;
background-color: white;
border-left: 1px solid #d9d9d9;
border-top: 1px solid #d9d9d9;
color: #333333;
font-size: 20px;
font-weight: 600;
line-height: 24.2px;
cursor: pointer;
`
export const BanManageInActiveTab=styled.button`
min-width: 200px;
height: 49px;
border: 1px solid #d9d9d9;
font-size: 20px;
font-weight: 500;
line-height: 24.2px;
cursor: pointer;
`
export const BanManagePaper=styled.div`
background-color: white;
border-left: 1px solid #d9d9d9;
border-right: 1px solid #d9d9d9;
border-bottom: 1px solid #d9d9d9;
`