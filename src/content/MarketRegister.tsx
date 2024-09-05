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
import AliSrc from '../images/company/ali.png'
import TaobaoSrc from '../images/company/taobao.png'
import AmazonSrc from '../images/company/amazon.png'
import { CustomCheckbox } from '../components/Btn/CustomCheckbox';
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
        {/* 상품마켓등록 창 */}
        <Dialog
        open={openMarketDialog}
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
            <span>상품 마켓 등록</span>
            <IconButton
            
            onClick={onClickCloseMarketDialog}>
              <CloseSharp sx={{
                width:"20px"
              }}/>
            </IconButton>
            </DialogTitle>
            <DialogContent>
        <MarketSrcRow>
            <MarketDialogSrcTxt>소싱사이트</MarketDialogSrcTxt>
<DialogSourcingSelect>
<option value="amazon">아마존</option>
      <option value="ali">알리</option>
      <option value="taobao">타오바오</option>
</DialogSourcingSelect>
        </MarketSrcRow>
<MarketSrcCol>
<MarketTitle>
    정보입력
</MarketTitle>
<MarketSrcRow>
<GiftNameInput
placeholder='상품명'
/>
<PriceInput
placeholder='가격'
/>
<UrlInput
placeholder='URL 입력'
/>
<UrlBtn>URL 접속</UrlBtn>
</MarketSrcRow>

</MarketSrcCol>
<MarketSrcCol>
    <MarketTitle>이미지 추가</MarketTitle>
    <MarketSrcRow>

        <ImgAddBtn>+</ImgAddBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>
        <ImgBtn>이미지</ImgBtn>
        <LastImgBtn>이미지</LastImgBtn>

    </MarketSrcRow>
</MarketSrcCol>
<ConfirmBtn>확인</ConfirmBtn>
            </DialogContent>
        </Dialog>
      {/* 엑셀파일 업로드 창 */}
      <Dialog open={openUload}>

        <DialogContent
        sx={{
          padding:"32px"
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
            <span>엑셀파일 업로드</span>
            <IconButton
            
            onClick={onCloseUpload}>
              <CloseSharp sx={{
                width:"20px"
              }}/>
            </IconButton>
            </DialogTitle>
            <UploadFileRow>
<FileNameInput placeholder='파일명'/>
<FileBtns>
  <FileSelBtn>파일 선택</FileSelBtn>
  <FileSampleBtn>양식 파일 다운</FileSampleBtn>
</FileBtns>

            </UploadFileRow>
  <FileUploadBtn>
     파일 업로드
  </FileUploadBtn>      </DialogContent>
  
      </Dialog>
      <SearchRow>
        <SearchTxt>검색어 입력</SearchTxt>
        <SearchInput placeholder='' />
        <RegisterDateTxt>등록일자:</RegisterDateTxt>
        <DateInput/>
        <RangeTxt>~</RangeTxt> 
        <DateInput/>
      <CheckRow>
        <CheckSet>
            <CustomCheckbox/>
            <span>이미지 표시</span>
        </CheckSet>
        <CheckSet>
            <CustomCheckbox/>
            <span>이미지 편집모드</span>
        </CheckSet>
      </CheckRow>
        
      </SearchRow>
      {/* 수집명 줄 */}
      <CollectRow>
      <CollectName>수집명:아마존 양말 001</CollectName>
      <CollectSelect>
      <option>접기</option>
      </CollectSelect>
           <Flex/> 
           <AllChkBtn>전체 검수</AllChkBtn>
<SelectChkBtn>선택상품 검수</SelectChkBtn>
<BanCodeBtn>선택 일괄 금지코드 설정</BanCodeBtn>


      </CollectRow>
      {/* 상품건수 줄 */}
      <GiftNumRow>
        <GiftNumName>상품건수:150</GiftNumName>
        <GiftToggle>판매가 설정</GiftToggle>
        <GiftToggle>배송/교환비 변경</GiftToggle>
        <GiftToggle>태그 설정</GiftToggle>
        <GiftToggle>카테고리 설정</GiftToggle>
        <GiftToggle>금지단어 상품삭제</GiftToggle>
        <GiftToggle>단어 치환</GiftToggle>
        <GiftToggle>상품명 길이 설정</GiftToggle>
        <GiftToggle>상품중복단어 제거</GiftToggle>
        <GiftToggle>상품키워드 추가</GiftToggle>
        <GiftToggle>상품명 원상복구</GiftToggle>
      </GiftNumRow>
      <TableWrapper> 
      <TableContainer component={Paper} sx={{ boxShadow: 'none'}}>
        <Table sx={{ minWidth: 1200,}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="left">선택</StyledTableCell>
              <StyledTableCell align="left">No.</StyledTableCell>
              <StyledTableCell align="center">태그</StyledTableCell>
              <StyledTableCell align="center">이미지</StyledTableCell>
              <StyledTableCell align="center">글자수</StyledTableCell>
              <StyledTableCell align="center">상품명</StyledTableCell>
              <StyledTableCell align="center">수집명</StyledTableCell>
              <StyledTableCell align="center">카테고리</StyledTableCell>
              <StyledTableCell align="center">원가</StyledTableCell>
              <StyledTableCell align="center">판매가</StyledTableCell>
              <StyledTableCell align="center">배송비</StyledTableCell>
              <StyledTableCell align="center">마켓수수료</StyledTableCell>
              <StyledTableCell align="center">최종마진</StyledTableCell>
              <StyledTableCell align="center">수정</StyledTableCell>
              <StyledTableCell align="center">삭제</StyledTableCell>
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
                  <CompanyUl>
                    <li><img src={TaobaoSrc}/></li>
                    <li><img src={TaobaoSrc}/></li>
                    <li><img src={TaobaoSrc}/></li>
                    <li><img src={TaobaoSrc}/></li>
                    <li><img src={TaobaoSrc}/></li>
                  </CompanyUl>
                </TableCell>
                <TableCell align="center">49</TableCell>
                <TableCell align="center">MT-001</TableCell>
                <TableCell align="center">MT-001</TableCell>
                <TableCell align="center">카테고리</TableCell>
                <TableCell align="center">21,000</TableCell>
                <TableCell align="center">21,000</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">수집중</TableCell>
                <TableCell align="center">6,000</TableCell>
                <TableCell align="center"><EditBtn>수정하기</EditBtn></TableCell>
                <TableCell align="center"><DelBtn>삭제하기</DelBtn></TableCell>
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
    <div
    style={{
        opacity:0
    }}
    >
    <UploadsWrapper>
    <AllChkBtn>상품수집</AllChkBtn>
<DownloadBtn>엑셀파일 다운로드</DownloadBtn>
</UploadsWrapper>

    </div>

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
<UploadsWrapper>
<AllChkBtn>상품수집</AllChkBtn>
<DownloadBtn>엑셀파일 다운로드</DownloadBtn>
</UploadsWrapper>
   </PageBtnsWrapper>
    

    </GiftCheckLayout>
   
   
  );
}
const LastGap=styled.div`
height:100px
`
const UploadsWrapper=styled.div`
display: flex;
flex-direction: row;
gap: 41px;
align-items: flex-end;
// margin-right: 165px;
`
const PageBtnsWrapper=styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-around;
`
const CollectCheckWrapper=styled.div`
display: flex;
flex-direction: column;
gap: 93px;
  width: 100%;
  min-width: 1400px;
  background-color: white;
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
const GiftToggle=styled.button`
border: 1px solid #bfbfbf;
font-size: 12px;
color: #555555;
background-color:#F2F2F2;
height: 30px;
border-radius: 5px;
cursor: pointer;
margin-right: 15px;
`
const GiftNumRow=styled.div`
margin-left: 62px;
margin-right: 62px;
display: flex;
flex-direction: row;
align-items: center;
`
const GiftNumName=styled.div`
font-weight: 500;
font-size: 16px;
color: #333333;

margin-right: 37px;
`
const CollectSelect=styled.select`
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  font-size: 14px;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  text-align: left;
  text-indent: 17px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
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
const CheckRow=styled.div`
display: flex;
flex-directon: row;
gap: 51px;
align-items: center;
margin-left: 58px;

`
const ConfirmBtn=styled.button`
margin-top: 42px;
cursor: pointer;
width: 100%;
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
const LastImgBtn=styled.button`
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
const UrlBtn=styled.button`
font-size: 14px;
color: white;
font-weight: 700;
background-color:#37508B;
border-radius: 8px;
border: none;
cursor: pointer;
width: 98px;
height: 40px;
`
const UrlInput=styled.input`
width: 164px;
height: 40px;
background-color:#F4F4F4;
color: #B9B8B8;
border-radius: 5px;
border: none;
font-weight: 500;
font-size: 16px;
text-indent: 12px;
margin-right: 18px;
`
const PriceInput=styled.input`
width: 94px;
height: 40px;
background-color:#F4F4F4;
color: #B9B8B8;
border-radius: 5px;
border: none;
font-weight: 500;
font-size: 16px;
text-indent: 12px;
margin-right: 18px;
`
const GiftNameInput=styled.input`
width: 125px;
height: 40px;
background-color:#F4F4F4;
color: #B9B8B8;
border-radius: 5px;
border: none;
font-weight: 500;
font-size: 16px;
text-indent: 12px;
margin-right: 18px;
`
const MarketTitle=styled.div`
font-size: 16px;
color: #333333;

`
const MarketSrcCol=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: flex-start;
justify-content: flex-start;
margin-top: 22px;
`
const MarketSrcRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const MarketDialogSrcTxt=styled.div`
font-weight: 500;
font-size: 16px;
color: #333333;
margin-right: 41px;
`
const DialogSourcingSelect = styled.select`
  background-color: white;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  border-radius: 5px;
  width: 138px;
  height: 30px;
  text-align: left;
  text-indent: 17px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`;
const SourcingSelect = styled.select`
  background-color: white;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  border-radius: 5px;
  width: 168px;
  height: 37px;
  text-align: center;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`;

const SourcingTxt=styled.div`
font-size: 15px;
margin-left: 80px;
margin-right: 27px;
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
const EditBtn=styled.button`
cursor: pointer;
border: 1px solid #999999;
background-color: #999999;
color:white;
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
const CompanyUl=styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
list-style: none;
margin:0;
padding:0;
`
const FileUploadBtn=styled.button`
border: none;
color:white;
border-radius: 8px;
font-size: 16px;
font-weight: 700;
height: 40px;
background-color: #37508B;
width: 100%;
margin-top: 32px;
`
const FileBtns=styled.div`
display: flex;
flex-direction: row;
gap: 11px;
`
const FileSampleBtn=styled.button`
border: 1px solid #37508B;
color:white;
border-radius: 8px;
font-size: 14px;
font-weight: 700;
height: 40px;
background-color: #7599EF;
// width: 98px;
`
const FileSelBtn=styled.button`
border: 1px solid #37508B;
color:#37508B;
border-radius: 8px;
font-size: 14px;
font-weight: 700;
height: 40px;
background-color: white;
// width: 98px;
`
const FileNameInput=styled.input`
text-indent: 14px;
width: 194px;
height: 40px;
background-color:#F4F4F4;
border-radius:5px;
border: none;
`
const UploadFileRow=styled.div`
display: flex;
flex-direction:row;
align-items:center;
gap: 8px;
margin-top:10px;
`
const DownloadBtn=styled.button`
height: 30px;
font-size: 14px;
border-radius: 5px;
color: white;
border: 1px solid #1F7145;
background-color: #1F7145;
`
const UploadBtn=styled.button`
height: 30px;
font-size: 14px;
border-radius: 5px;
color: #1F7145;
border: 1px solid #1F7145;
background-color: white;
`
const Flex=styled.div`
flex:1
`
const BanCodeBtn=styled.button`
// width: 82px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: white;
border: 1px solid #335A97;
background-color: #335A97;
`
const SelectChkBtn=styled.button`
// width: 82px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: #335A97;
border: 1px solid #335A97;
background-color: #E6EEFA;
margin-right: 15px;
`
const AllChkBtn=styled.button`
width: 75px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: #335A97;
border: 1px solid #335A97;
background-color: white;
margin-right: 15px;
`
const CheckBtns=styled.div`
width:calc(100% - 60px - 60px);
margin-left: 60px;
margin-right: 60px;
display: flex;
flex-direction: row;
gap: 22px;
`
const DeleteBtn=styled.button`
width: 75px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: #666666;
border: 1px solid #666666;
background-color: white;
`
const AllRow=styled.div`
width:calc(100% - 60px - 60px);
margin-left: 60px;
margin-right: 60px;
display: flex;
flex-direction: row;
gap: 25px;
align-items: center;
font-size: 14px;
color: #666666;
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

const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 45px;
  margin-bottom: 42px;
`;
const RegisterDateTxt = styled.div`
  font-size: 16px;
  margin-left: 24px;
  margin-right: 20px;
`;
const SearchTxt = styled.div`
  font-size: 16px;
  margin-left: 62px;
  margin-right: 72px;
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
