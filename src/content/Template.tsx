import * as React from 'react';
import { BanManageLayout, BanManagePaper, DelBtn, TableWrapper } from './BanManage';
import { SiteApiTabs } from '../components/Btn/SiteApiTabs';
import { TemplateTabs } from '../components/Btn/TemplateTabs';
import { Dialog, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ActivePageBtn, Flex, InactivePageBtn, PageBtns, PageBtnsWrapper, rows2, StyledTableCell, StyledTableHead } from './AllGift';
import { CustomCheck } from '../components/Btn/CustomCheck';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos, CloseSharp } from '@mui/icons-material';
import { CustomCheckbox } from '../components/Btn/CustomCheckbox';
import { ShowSelect } from './MarketRegister';

export interface ITemplateProps {
}

export function Template (props: ITemplateProps) {
    const [openTempladeAdd,setTemplateAdd]=React.useState(false)
    const onClickOpenTemplateAdd=()=>{
        setTemplateAdd(true)
    }
    const onClickCloseTemplateAdd=()=>{
        setTemplateAdd(false)
    }
  return (
    <BanManageLayout>
        {/* 배송 템플릿 추가 */}
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
        <span>배송 템플릿 추가</span>
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
         {/* 템플릿 이름 */}
         <DialogSubTitle>배송 기본 정보</DialogSubTitle>
<CostRow>
    <CostTitle>배송비 입력</CostTitle>
    <CostInput placeholder='5,000'/>
</CostRow>

<FreeRow>
    <CustomCheckbox />
<span>배송비 상품 가격에 포함 및 무료 배송 설정</span>
</FreeRow>
{/* 배송 옵션 */}
<CostTitle>배송 옵션</CostTitle>
<OptionUl>
    <OptionLi>
    <CustomCheckbox />
    <span>쿠팡 반품 배송비(편도) 최대금액 자동 설정</span>
    </OptionLi>
    <OptionLi>
    <CustomCheckbox />
    <span>마켓 배송비 정책 위배 시 자동 조정</span>
    </OptionLi>
    <OptionLi>
    <CustomCheckbox />
    <span>추가 배송비 적용</span>
    </OptionLi>
    <OptionLi>
    <CustomCheckbox />
    <span>배송비 상품 가격에 포함 및 무료 배송 설정</span>
    </OptionLi>
</OptionUl>
{/* 배송비 */}
<FeeRow>
<FeeSet>
    <span>도서 산간 추가 배송비</span>
    <FeeInput placeholder='추가 배송비'/>
</FeeSet>
<FeeSet>
    <span>제주 추가 배송비</span>
    <FeeInput placeholder='추가 배송비'/>
</FeeSet>
</FeeRow>
<OptionUl>
<OptionLi>
    <CustomCheckbox />
    <span>배송비 상품 가격에 포함 및 무료 배송 설정</span>
    </OptionLi>
    <OptionLi>
    <CustomCheckbox />
    <FreeInput placeholder='5,000'/>
    <span>
    원 이상 구매시 무료배송
    </span>
    </OptionLi>
</OptionUl>
<DialogBtns></DialogBtns>

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
onClick={onClickOpenTemplateAdd}>배송 템플릿 추가하기</TemplateBtn>
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
                <TableCell align="center">배송 템플릿1</TableCell>
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
// export const TemplateTableWrapper = styled.div`
//   width: calc(100% - 32px - 32px);
//   margin-left: 32px;
//   margin-right: 32px;
// `;
export const DialogBtns=styled.div`
display: flex;
gap: 30px;
width: 100%;
`
export const CopyBtn=styled.button`
width: 100%;
height: 45px;
top: 797px;
left: 693px;
border-radius: 8px;
border: 1px solid #666666;
color: #666666;
font-size: 14px;
font-weight: 700;
background-color: white;
margin-bottom: 17px;
`
export const AddBtn=styled.button`
width: 100%;
height: 45px;
top: 797px;
left: 693px;
border-radius: 8px;
border: 1px solid #37508B;
color: white;
font-size: 14px;
font-weight: 700;
background-color: #37508B;
`
export const TemplateDialogWrapper=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`
export const FreeInput=styled.input`
width: 117px;
height: 37px;
border: none;
border-radius: 5px;
text-indent: 20px;
font-size: 16px;
color:#B9B8B8;
background-color:#F4F4F4;
margin-right: 8px;
`
export const FeeInput=styled.input`
width: 205px;
height: 45px;
border: none;
border-radius: 5px;
text-indent: 20px;
font-size: 16px;
color:#B9B8B8;
background-color:#F4F4F4;
`
export const FeeSet=styled.div`
display: flex;
flex-direction: column;
gap: 7px;
text-indent: 11px;
font-size: 16px;
color: #666666;
`
export const FeeRow=styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
gap: 22px;
margin-bottom: 10px;
`
export const OptionUl=styled.ul`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
margin-bottom: 33px;
`
export const OptionLi=styled.li`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
color: #333333;
font-size: 16px;
height: 39px;
`
export const CostTitle=styled.div`
width: 132px;

`
export const FreeRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
color: #333333;
font-size: 16px;
margin-bottom: 52px;
`

export const CostRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 16px;
`
export const CostInput=styled.input`
width: 341px;
height: 45px;
border: none;
border-radius: 5px;
text-indent: 20px;
font-size: 16px;
color:#B9B8B8;
background-color:#F4F4F4;
`
export const TemplateNameInput=styled.input`
width: 489px;
height: 45px;
border: none;
border-radius: 5px;
text-indent: 20px;
font-size: 16px;
color:#B9B8B8;
background-color:#F4F4F4;
margin-bottom: 32px;
`
export const DialogSubTitle=styled.div`
color: #666666;
font-size: 16px;
font-weight: 700;
line-height: 21.6px;
text-align: left;
margin-bottom: 11px;
`
export const TemplateDelBtn=styled.button`
background-color:white;
border: 1px solid #335A97;
color: #335A97;
font-size: 14px;
height: 36px;
cursor: pointer;
border-radius: 5px;
`
export const ExcelDownloadBtn=styled.button`
background-color:#1F7145;
border: 1px solid #1F7145;
color: white;
font-size: 14px;
height: 36px;
cursor: pointer;
border-radius: 5px;
`
export const ExcelDownloadRow=styled.div`
display: flex;
flex-direction: row;
gap: 36px;
margin-top: -1px;
align-items: center;
justify-content: flex-end;
margin-right: 32px;
margin-bottom: 34px;
`
export const TemplateBtnRow=styled.div`
display: flex;
width: calc(100% - 64px);
flex-direction: row;
align-items: center;
justify-content: flex-end;
margin-top: 34px;
margin-bottom: 14px;
margin-left: 32px;
margin-right: 32px;
`
export const TemplateBtn=styled.button`
// width: 134px;
height: 36px;
color: white;
font-size: 14px;
background-color:#37508B;
border: none;
border-radius: 5px;
cursor: pointer;
`