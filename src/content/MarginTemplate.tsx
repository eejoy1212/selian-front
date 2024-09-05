import * as React from 'react';
import {  BanManageLayout, BanManagePaper, DelBtn, TableWrapper } from './BanManage';
import { SiteApiTabs } from '../components/Btn/SiteApiTabs';
import { TemplateTabs } from '../components/Btn/TemplateTabs';
import { Dialog, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ActivePageBtn, InactivePageBtn, PageBtns, PageBtnsWrapper, rows2, StyledTableCell, StyledTableHead } from './AllGift';
import { CustomCheck } from '../components/Btn/CustomCheck';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos, CloseSharp } from '@mui/icons-material';
import { CustomCheckbox } from '../components/Btn/CustomCheckbox';
import { AddBtn, CopyBtn, CostInput, CostRow, CostTitle, DialogBtns, DialogSubTitle, ExcelDownloadBtn, ExcelDownloadRow, FeeInput, FeeRow, FeeSet, FreeInput, FreeRow, OptionLi, OptionUl, TemplateBtn, TemplateBtnRow, TemplateDelBtn, TemplateDialogWrapper, TemplateNameInput } from './Template';
import { CustomRadio } from '../components/Btn/CustomRadio';
import { ExcelUploadDialog } from '../components/dialog/ExcelUploadDialog';

export interface IMarginTemplateProps {
}

export function MarginTemplate (props: IMarginTemplateProps) {
    const [openTempladeAdd,setTemplateAdd]=React.useState(false)
    const [openExcel,setExcel]=React.useState(false)
    const onClickOpenTemplateAdd=()=>{
        setTemplateAdd(true)
    }
    const onClickCloseTemplateAdd=()=>{
        setTemplateAdd(false)
    }
    const onClickOpenExcel=()=>{
        setExcel(true)
    }
    const onClickCloseExcel=()=>{
        setExcel(false)
    }
  return (
    <BanManageLayout>
        {/* 엑셀 업로드 다이얼로그 */}
        <ExcelUploadDialog openUload={openExcel} onCloseUpload={onClickCloseExcel}/>
        {/*마진 템플릿 추가 */}
        <Dialog
        open={openTempladeAdd}
        sx={{
            '& .MuiDialog-paper': {
              
              width: '840px', // 다이얼로그 창의 너비를 685px로 지정
              maxWidth: 'none', // 최대 너비 제한을 없애기 위해 설정
            },
          }}
        >
             <DialogTitle sx={{
                // padding:1,
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
        <span>마진 템플릿 추가</span>
        <IconButton
        
        onClick={onClickCloseTemplateAdd}>
          <CloseSharp sx={{
            width:"20px"
          }}/>
        </IconButton>
        </DialogTitle>
            <DialogContent
            sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}
            >
                <TemplateDialogWrapper>
    {/* 템플릿 이름 */}
    <DialogSubTitle>템플릿 이름</DialogSubTitle>
<TemplateNameInput placeholder='템플릿 이름을 입력해주세요.'/>
         {/* 이미지 첨부 */}
         <DialogSubTitle>마진 기준 추가</DialogSubTitle>
         {/* 배송비 */}
<FeeRow>
<FeeSet>
    <span>기준 상품 가격</span>
    <FeeInput placeholder='기준 상품 가격'/>
</FeeSet>
<FeeSet>
    <span>추가 금액 마진</span>
    <FeeInput placeholder='추가 마진'/>
</FeeSet>
<ChangeBtn>변경</ChangeBtn>
</FeeRow>
 
<MarginInfoTitle>마진 정보</MarginInfoTitle>
{/* 테이블 */}
      <TableContainer component={Paper} sx={{ boxShadow: 'none',marginBottom: "37px"}}>
        <Table 
        size='small'
        sx={{ minHeight:320}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="left">선택</StyledTableCell>
              <StyledTableCell align="left">No.</StyledTableCell>
              <StyledTableCell align="center">기준 상품 가격</StyledTableCell>
              <StyledTableCell align="center">추가마진</StyledTableCell>
              <StyledTableCell align="center">수정</StyledTableCell>
              <StyledTableCell align="center">삭제</StyledTableCell>
              <StyledTableCell align="center">복사</StyledTableCell>
     
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
                <TableCell align="center">5,000원 이상</TableCell>
                <TableCell align="center">
                500원
                </TableCell>
                <TableCell align="center"><DelBtn>수정</DelBtn></TableCell>
                <TableCell align="center"><DelBtn>삭제</DelBtn></TableCell>
                <TableCell align="center"><DelBtn>복사</DelBtn></TableCell>
             

              </TableRow>
            ))}
          </TableBody>
    
        </Table>     

        {/* 2.데이터가 없는 경우 */}
         {/* <NoDataPaper>
<span>수집중입니다.</span>
<span>수집률: 0%</span>
</NoDataPaper>  */}
        
      </TableContainer>
<DialogBtns><CopyBtn>기존 템플릿에서 복제하기</CopyBtn>
<AddBtn>추가하기</AddBtn></DialogBtns>
                </TemplateDialogWrapper>
          
            </DialogContent>
        </Dialog>
        {/* 배송템플릿 추가 */}
<TemplateTabs/>
          <BanManagePaper>
            {/* 테이블 */}
            <TemplateBtnRow>
<TemplateBtn
onClick={onClickOpenTemplateAdd}>마진 템플릿 추가하기</TemplateBtn>
            </TemplateBtnRow>
<TableWrapper> 
      <TableContainer component={Paper} sx={{ boxShadow: 'none'}}>
        <Table 
        size='small'
        sx={{ minWidth: 1200,minHeight:320}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="left">선택</StyledTableCell>
              <StyledTableCell align="left">No.</StyledTableCell>
              <StyledTableCell align="center">템플릿 이름</StyledTableCell>
              <StyledTableCell align="center">등록일자</StyledTableCell>
              <StyledTableCell align="center">수정</StyledTableCell>
              <StyledTableCell align="center">삭제</StyledTableCell>
              <StyledTableCell align="center">복사</StyledTableCell>
     
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
                <TableCell align="center">마진 템플릿</TableCell>
                <TableCell align="center">
                2023.12.25 14:00
                </TableCell>
                <TableCell align="center"><DelBtn>수정</DelBtn></TableCell>
                <TableCell align="center"><DelBtn>삭제</DelBtn></TableCell>
                <TableCell align="center"><DelBtn>복사</DelBtn></TableCell>
             

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
   <ExcelDownloadRow>
    <TemplateDelBtn>선택 템플릿 삭제</TemplateDelBtn>
    <ExcelAddBtn onClick={onClickOpenExcel}>엑셀 파일로 추가하기</ExcelAddBtn>
    <ExcelDownloadBtn>엑셀파일 다운로드</ExcelDownloadBtn>
    </ExcelDownloadRow>
            </BanManagePaper></BanManageLayout>
  );
}

export const TagInput=styled.input`
width: 489px;
height: 45px;
border: none;
border-radius: 5px;
text-indent: 20px;
font-size: 16px;
color:#B9B8B8;
background-color:#F4F4F4;
`
const MarginInfoTitle=styled.div`
color: #666666;
font-size: 16px;
font-weight: 700;
line-height: 21.6px;
text-align: left;
margin-bottom: 11px;
margin-top: 30px;
`
const MarginInput=styled.input`
width: 117px;
height: 45px;
border: none;
border-radius: 5px;
text-indent: 20px;
font-size: 16px;
color:#B9B8B8;
background-color:#F4F4F4;
`
const ExcelAddBtn=styled.button`
background-color:#335A97;
border: 1px solid #335A97;
color: white;
font-size: 14px;
height: 36px;
cursor: pointer;
border-radius: 5px;
`
const PreviewBtn=styled.button`
width: 85px;
height: 40px;
font-size: 14px;
font-weight: 700;
border-radius: 8px;
border: 1px solid #335A97;
background-color:#335A97;
color: white;
`
const ChangeBtn=styled.button`
width: 47px;
height: 40px;
font-size: 14px;
font-weight: 700;
border-radius: 8px;
border: 1px solid #335A97;
background-color:#7599EF;
color: white;
`
const PreviewRow=styled.div `
display: flex;
flex-direction: row;
gap: 10px;
align-items: center;
font-size: 16px;
color: #666666;
margin-bottom: 21px;
`
const PreviewInput=styled.input`
width: 308px;
height: 45px;
border-radius: 5px;
background-color: #F4F4F4;
border: none;
text-indent: 20px;
`
const RadioRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
color: #333333;
font-size: 16px;
margin-bottom: 15px;
`
