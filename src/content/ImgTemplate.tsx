import * as React from 'react';
import {  BanManageLayout, BanManagePaper, DelBtn, TableWrapper } from './BanManage';
import { SiteApiTabs } from '../components/Btn/SiteApiTabs';
import { TemplateTabs } from '../components/Btn/TemplateTabs';
import { Dialog, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ActivePageBtn, Flex, InactivePageBtn, PageBtns, PageBtnsWrapper, rows2, StyledTableCell, StyledTableHead } from './AllGift';
import { CustomCheck } from '../components/Btn/CustomCheck';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos, CloseSharp } from '@mui/icons-material';
import { CustomCheckbox } from '../components/Btn/CustomCheckbox';
import { AddBtn, CopyBtn, CostInput, CostRow, CostTitle, DialogBtns, DialogSubTitle, ExcelDownloadBtn, ExcelDownloadRow, FeeInput, FeeRow, FeeSet, FreeInput, FreeRow, OptionLi, OptionUl, TemplateBtn, TemplateBtnRow, TemplateDelBtn, TemplateDialogWrapper, TemplateNameInput } from './Template';
import { CustomRadio } from '../components/Btn/CustomRadio';
import { ShowSelect } from './MarketRegister';

export interface IImgTemplateProps {
}

export function ImgTemplate (props: IImgTemplateProps) {
    const [openTempladeAdd,setTemplateAdd]=React.useState(false)
    const onClickOpenTemplateAdd=()=>{
        setTemplateAdd(true)
    }
    const onClickCloseTemplateAdd=()=>{
        setTemplateAdd(false)
    }
  return (
    <BanManageLayout>
        {/* 이미지 템플릿 추가 */}
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
        <span>이미지 템플릿 추가</span>
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
         <DialogSubTitle>이미지 첨부</DialogSubTitle>
         <RadioRow>
<span>URL</span>
<CustomRadio checked={false}/>
<span>이미지 파일</span>
<CustomRadio checked/>
</RadioRow>
<PreviewRow>
    <span>상단</span>
    <PreviewInput
    placeholder='파일명'
    />
    <ChangeBtn>변경</ChangeBtn>
    <PreviewBtn>미리보기</PreviewBtn>
</PreviewRow>
<PreviewRow>
    <span>하단</span>
    <PreviewInput
    placeholder='파일명'
    />
    <ChangeBtn>변경</ChangeBtn>
    <PreviewBtn>미리보기</PreviewBtn>
</PreviewRow>

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
onClick={onClickOpenTemplateAdd}>이미지 템플릿 추가하기</TemplateBtn>
  <Flex/>
        <ShowSelect>
      <option>
        10개씩보기
      </option>
      </ShowSelect>
            </TemplateBtnRow>
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
                <TableCell align="center">이미지 템플릿</TableCell>
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
<ExcelDownloadBtn>엑셀파일 다운로드</ExcelDownloadBtn>
   </ExcelDownloadRow>
            </BanManagePaper></BanManageLayout>
  );
}
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
export const PreviewRow=styled.div `
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
export const SaleOptionTitle=styled.div`
width: 166px;
margin-top: 42px;
margin-bottom: 11px;
`
export const ViolationRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
color: #333333;
font-size: 16px;
margin-bottom: 24px;
`
export const FailRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
color: #333333;
font-size: 16px;
margin-bottom: 24px;
margin-top: 30px;
`
export const SourcingTitle=styled.div`
width: 166px;

`
export const SourcingInput=styled.input`
width: 320px;
height: 45px;
border: none;
border-radius: 5px;
text-indent: 20px;
font-size: 16px;
color:#B9B8B8;
background-color:#F4F4F4;
`