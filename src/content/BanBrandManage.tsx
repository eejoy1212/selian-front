import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { ActivePageBtn, InactivePageBtn, PageBtns, PageBtnsWrapper, rows2, StyledTableCell, StyledTableHead } from './AllGift';
import { CustomCheck } from '../components/Btn/CustomCheck';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { ExcelUploadDialog } from '../components/dialog/ExcelUploadDialog';
import { AddBtn, AddCol, BanListInput, BanListSelect, BanManageActiveTab, BanManageInActiveTab, BanManageLayout, BanManagePaper, BanManageTabs, BanTemplateTitle, DateInput, DateRow, DelBtn, EditBtnRow, ExcelAddBtn, ExcelDownloadBtn, FilterRow, InitBtn, RangeTxt, RegisterChip, RegisterRow, SearchBtn, SearchBtnRow, SearchCol, SearchInput, SearchRow, SelDelBtn, SelectRow, TableBtnsRow, TableWrapper } from './BanManage';
import { useNavigate } from 'react-router-dom';

export interface IBanBrandManageProps {
}

export function BanBrandManage (props: IBanBrandManageProps) {
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
      <BanManageInActiveTab
       onClick={() => {
        navigate('/ban-manage');
      }}
      >금지어관리</BanManageInActiveTab>
      <BanManageActiveTab>금지 브랜드 관리</BanManageActiveTab>
      </BanManageTabs>
      <BanManagePaper>
        <FilterRow>
            {/* 왼쪽 추가 구간 */}
<AddCol>
    <BanTemplateTitle>금지 브랜드 템플릿 선택</BanTemplateTitle>
<SelectRow>
    <BanListSelect>
        <option>금지어 리스트 1</option>
    </BanListSelect>
    <AddBtn>템플릿 추가</AddBtn>
</SelectRow>
<BanTemplateTitle>금지브랜드 추가</BanTemplateTitle>
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
              <StyledTableCell align="left">선택</StyledTableCell>
              <StyledTableCell align="left">No.</StyledTableCell>
              <StyledTableCell align="center">금지 브랜드</StyledTableCell>
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
                <TableCell align="left"
                
                scope="row">
                  <CustomCheck
                  checked={true}
                  />
                </TableCell>
                <TableCell align="left">{rows2.length-index}</TableCell>
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
