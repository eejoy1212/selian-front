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
import { CloseSharp } from '@mui/icons-material';
import { CustomCheck } from '../components/Btn/CustomCheck';
import AliSrc from '../images/company/ali.png'
import TaobaoSrc from '../images/company/taobao.png'
import AmazonSrc from '../images/company/amazon.png'
export interface IGiftCheckProps {}

export function GiftCheck(props: IGiftCheckProps) {
  const [openUload,setOpenUpload]=React.useState(false)
  const onOpenUpload=()=>{
    setOpenUpload(true)
  }
  const onCloseUpload=()=>{
    setOpenUpload(false)
  }
  return (
    <GiftCheckLayout>
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
        <SearchTxt>수집명</SearchTxt>
        <SearchInput placeholder='수집명 미입력 시 “소싱사이트+ URL 내 검색단어”로 자동입력 됩니다.' />
        <RadioSet>
          <span>URL입력</span>
          <CustomRadio checked />
          <span>검색어입력</span>
          <CustomRadio checked={false} />
        </RadioSet>
      </SearchRow>
      <TableWrapper> 
      <TableContainer 
     variant='elevation'
      component={Paper} sx={{ }}>
        <Table 
        size='small'
      
        sx={{
          minWidth: 1200,}} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="left" >선택</StyledTableCell>
              <StyledTableCell align="left" >No.</StyledTableCell>
              <StyledTableCell align="center">소싱사이트</StyledTableCell>
              <StyledTableCell align="center">태그</StyledTableCell>
              <StyledTableCell align="center">글자수</StyledTableCell>
              <StyledTableCell align="center">상품명</StyledTableCell>
              <StyledTableCell align="center">카테고리</StyledTableCell>
              <StyledTableCell align="center">원가</StyledTableCell>
              <StyledTableCell align="center">관세</StyledTableCell>
              <StyledTableCell align="center">판매가</StyledTableCell>
              <StyledTableCell align="center">중간마진</StyledTableCell>
              <StyledTableCell align="center">배송비</StyledTableCell>
              <StyledTableCell align="center">마켓수수료</StyledTableCell>
              <StyledTableCell align="center">최종마진</StyledTableCell>
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
                  checked
                  />
                </TableCell>
                <TableCell align="left">{rows2.length-index}</TableCell>
                <TableCell align="center">
                  <CompanyUl>
                    <li><img src={AmazonSrc}/></li>
                    <li><img src={AmazonSrc}/></li>
                    <li><img src={AmazonSrc}/></li>
                    <li><img src={AmazonSrc}/></li>
                    <li><img src={AmazonSrc}/></li>
                  </CompanyUl>
                </TableCell>
                <TableCell align="center">태그</TableCell>
                <TableCell align="center">49</TableCell>
                <TableCell align="center">MT-001</TableCell>
                <TableCell align="center">카테고리</TableCell>
                <TableCell align="center">21,000</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">21,000</TableCell>
                <TableCell align="center">8,500</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">수집중</TableCell>
                <TableCell align="center">6,000</TableCell>
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
      <div
      style={{
        height:"100%"
      }}
      />
    {/* 전체선택  */}
<AllRow>
  <CustomRadio checked/>
  <span>전체선택(4/11)</span>
<DeleteBtn>전체삭제</DeleteBtn>
</AllRow>
<CheckBtns>
<AllChkBtn>전체 검수</AllChkBtn>
<SelectChkBtn>선택상품 검수</SelectChkBtn>
<BanCodeBtn>선택 일괄 금지코드 설정</BanCodeBtn>
<Flex/>
<UploadBtn
onClick={onOpenUpload}
>엑셀파일 업로드</UploadBtn>
<DownloadBtn>엑셀파일 다운로드</DownloadBtn>
</CheckBtns>

    </GiftCheckLayout>
  );
}
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
`
const AllChkBtn=styled.button`
width: 75px;
height: 30px;
font-size: 14px;
border-radius: 5px;
color: #335A97;
border: 1px solid #335A97;
background-color: white;
`
const CheckBtns=styled.div`
width:calc(100% - 60px - 60px);
margin-left: 60px;
margin-right: 60px;
margin-bottom: 20px;
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
  margin-bottom: 10px;
`;

const SearchTxt = styled.div`
  font-size: 18px;
  margin-left: 156px;
  margin-right: 67px;
`;

const SearchInput = styled.input`
  width: 780px;
  height: 37px;
  border: 1px solid #999999;
  border-radius: 5px;
  text-indent: 15px;
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
  // box-shadow: none; /* 그림자 제거 */
`;

const StyledTableCell = styled(TableCell)`
  // border-top: 1px solid #6a6a6a;
  font-weight: bold !important; 
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
