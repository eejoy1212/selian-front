import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Flex, rows2 } from '../../content/AllGift';
import { Pause, PlayArrow, Stop } from '@mui/icons-material';
import { CustomCheckbox } from '../Btn/CustomCheckbox';
import { DualListBox } from '../Table/DualListBox';

export interface IMarketRegisterProps {
    open: boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

// Chart.js 모듈 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 차트 데이터와 옵션 설정
// 가로 바 차트 데이터
const data = {
  labels: ['스마트 스토어', '쿠팡', '11번가', '알리', '인터파크', '옥션'],
  datasets: [
    {
      label: '등록 진행 현황',
      data: [80, 65, 59, 90, 81],  // 예시 데이터
      backgroundColor: [
        'rgba(51, 90, 151, 0.6)',  // 연한 #335A97
        'rgba(252, 111, 33, 0.6)',  // 연한 #FC6F21
        'rgba(254, 179, 5, 0.6)',  // 연한 #FEB305
        'rgba(51, 90, 151, 0.6)',  // 연한 #335A97
        'rgba(252, 111, 33, 0.6)',  // 연한 #FC6F21
      ],
      borderColor: [
        '#335A97', 
        '#FC6F21', 
        '#FEB305',
        '#335A97', 
        '#FC6F21',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y' as const, // 수평 차트를 만들기 위한 설정
  responsive: true,
  maintainAspectRatio: false, // 차트의 비율 유지 안함
  plugins: {
    legend: {
      display: false, // Legend 숨기기
    },
    title: {
      display: false,
      // text: '마켓 등록 진행 현황',
    },
  },
  scales: {
    x: {
      beginAtZero: true, // x축이 0부터 시작
      max: 100, // 차트의 최대값을 100으로 설정
    },
  },
};
export function MarketRegister ({open,onOpen,onClose}: IMarketRegisterProps) {
    const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout | null>(null);
    const [logs, setLogs] = React.useState<string[]>(['2023.12.25 14:00 [상품명][등록마켓]등록']);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [agreeStop,setAgreeStop]=React.useState(false)
    //등록 시작
    const [startSnackbarOpen, setStartSnackbarOpen] = React.useState(false); 
    const logsEndRef = React.useRef<HTMLTextAreaElement>(null); 
    //등록 종료
    const [isRunning, setIsRunning] = React.useState(false);



  const handleConfirm = () => {
    // 마켓 등록 중지 로직 처리
    setAlertOpen(false);
    if (intervalId) {
      clearInterval(intervalId); // interval 중지
      setIntervalId(null);
      setIsRunning(false);
      setLogs((prevLogs) => [...prevLogs, `${new Date().toLocaleTimeString()} 등록 종료.`]);
    }
 
    alert('마켓 등록이 중지되었습니다.');
  };
  // const handleConfirm = () => {
  //   // 마켓 등록 중지 로직 처리
  //   setAlertOpen(false);
  //   setSnackbarOpen(true);  // 등록 중지 스낵바 열기
  // };

  const handleSnackbarClose = () => {
    setStartSnackbarOpen(false);  // 등록 중지 스낵바 닫기
  };



  // 등록 시작 핸들러
  const handleStartButtonClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      setStartSnackbarOpen(true);

      // 로그가 계속 추가되도록 interval 설정
      const id = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        setLogs((prevLogs) => [...prevLogs, `${currentTime} [상품명][등록마켓] 등록 진행 중...`]);
      }, 3000); // 3초마다 로그 추가
      setIntervalId(id);
    }
  };

  // 등록 종료 핸들러
  const handleEndButtonClick = () => {
    setAlertOpen(true)
 
   
  };

  // 알럿 다이얼로그 닫기
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  // 스낵바 닫기
  const handleStartSnackbarClose = () => {
    setStartSnackbarOpen(false);
  };

  // 로그가 추가될 때마다 자동으로 스크롤
  React.useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollTop = logsEndRef.current.scrollHeight;
    }
  }, [logs]);

  return (<>
     <Snackbar
         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
         open={startSnackbarOpen}
        onClose={handleStartSnackbarClose}
        autoHideDuration={3000}
      
      >
         <CustomSnackbarAlert onClose={handleStartSnackbarClose} severity="info">
          등록을 시작합니다.
        </CustomSnackbarAlert>
      </Snackbar>
      <Dialog open={open}
     sx={{
      '& .MuiDialog-paper': {
          minWidth: '1700px'
      }
  }}
      >
        <DialogTitle
        sx={{
textAlign:"center"
        }}
        >상품 마켓 등록</DialogTitle>
        <DialogContent
        sx={{
          display: "flex",
          flexDirection:"row",
          gap: "79px"
        }}
        >
<RegisterLeft>
<RegisterTitle>등록현황</RegisterTitle>
<ChartWrapper>
<Bar data={data} options={options} height={490}/>
            </ChartWrapper>
            <MarketRegisterTitle>마켓 등록 템플릿</MarketRegisterTitle>
            <MarketRegisterSelect>
              <option>등록 템플릿 1</option>
            </MarketRegisterSelect>
            <RegisterOptionTitle>등록 옵션</RegisterOptionTitle>
            <RegisterChkRow>
              <CustomCheckbox checked/>
              <span>상품 코드 중복검사</span>
            </RegisterChkRow>
             <RegisterChkRow>
              <CustomCheckbox checked/>
              <span>상품명 중복 검사</span>
            </RegisterChkRow>
               <RegisterChkRow>
              <CustomCheckbox/>
              <span>중복 상품 삭제후 재등록</span>
            </RegisterChkRow>
        
            <SameTimeRow>
              <span>동시 등록 마켓수</span>
            <SameTimeSelect>
              <option>10개 마켓 동시 등록</option>
            </SameTimeSelect>
            </SameTimeRow>
</RegisterLeft>
<RegisterRight>
<RegisterMarketSearchRow>
<RegisterMarketSearchInput placeholder='마켓 이름을 검색해 주세요.'/>
<SearchBtn>검색</SearchBtn>
</RegisterMarketSearchRow>

  <DualListBox/>
  {/* 등록상품 정보 */}
<FolderLayout>
  <FolderTabs>
    <InfoTab>등록 상품 정보</InfoTab>
    <EmptyTab/>
    </FolderTabs>

<TableContainer component={Paper} sx={{  minWidth: "100%",maxWidth: "100%",boxShadow: 'none'}}>
        <Table
        size="small"
      aria-label="simple table">
          <StyledDialogTableHead>
            <TableRow>
              <StyledDialogTableCell align="center">번호</StyledDialogTableCell>
              <StyledDialogTableCell align="center">상품명</StyledDialogTableCell>
              <StyledDialogTableCell align="center">판매가</StyledDialogTableCell>
              <StyledDialogTableCell align="center">수집일</StyledDialogTableCell>
            
            </TableRow>
          </StyledDialogTableHead>
         {/* 1.데이터가 있는경우 */}
         <TableBody
       
          >

           {rows2.slice(0,4).map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { 
                  
                  border: 0 } }}
              >
             
                <TableCell align="center"    sx={{
                  height:"24px"
                }}>{3-index}</TableCell>
                <TableCell align="center"    sx={{
                  height:"24px"
                }}>스마트 스토어</TableCell>
                <TableCell align="center"    sx={{
                  height:"24px"
                }}>
                64,000
                </TableCell>
                <TableCell align="center"    sx={{
                  height:"24px"
                }}>
                2023.12.25 14:00
                </TableCell>
            
           

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
</FolderLayout>
  {/* 등록 상태 ->테이블 버전*/}
  {/* <FolderLayout>
  <FolderTabs>
    <InfoTab>등록 상태</InfoTab>
    <EmptyTab/>
    </FolderTabs>

<TableContainer component={Paper} sx={{  minWidth: "100%",maxWidth: "100%",boxShadow: 'none'}}>
        <Table
        size="small"
      aria-label="simple table">
          <StyledDialogTableHead>
            <TableRow>
              <StyledDialogTableCell align="center">작업일시</StyledDialogTableCell>
              <StyledDialogTableCell align="center">작업내용</StyledDialogTableCell>
              <StyledDialogTableCell align="center"></StyledDialogTableCell>
              <StyledDialogTableCell align="center"></StyledDialogTableCell>
            </TableRow>
          </StyledDialogTableHead>
     
         <TableBody
       
          >

            {rows2.slice(0,4).map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { 
                  
                  border: 0 } }}
              >
             
                <TableCell align="center"
                sx={{
                  height:"24px"
                }}
                >2023.12.25 14:00</TableCell>
                <TableCell align="center"
                sx={{
                  height:"24px"
                }}
                >[상품명][등록마켓]등록</TableCell>
                <TableCell align="center"
                sx={{
                  height:"24px"
                }}
                >
                </TableCell>
                <TableCell align="center"    sx={{
                  height:"24px"
                }}>
                </TableCell>
              </TableRow>
            ))} 
       
    
          </TableBody>
    
        </Table>     

    
        
      </TableContainer>
</FolderLayout> */}
{/* 등록상태->텍스트에리어 버전 */}
<StyledTextarea
 value={logs.join('\n')} 
 readOnly
 ref={logsEndRef}  // 로그창 스크롤을 위해 ref 설정
/>
<Flex/>
<RegisterBtns>
{/* <Flex/> */}
  <StartBtn onClick={handleStartButtonClick}>
    <span>등록시작</span>
    <PlayArrow/>
    </StartBtn>
    <PauseBtn>
    <span>등록정지</span>
    <Pause/>
    </PauseBtn>
    <EndBtn onClick={handleEndButtonClick}><span>등록종료</span>
    <Stop/>
    </EndBtn>
    <Flex/>
    <CloseBtn onClick={onClose}>닫기</CloseBtn>
</RegisterBtns>
 {/* 알럿 다이얼로그 */}
 <Dialog open={alertOpen} onClose={handleAlertClose}>
        <DialogContent>
          <span>마켓 등록을 중지하시겠습니까?</span>
        </DialogContent>
        <DialogActions>
          <CancelBtn onClick={handleAlertClose} color="primary">
            취소
          </CancelBtn>
          <AgreeBtn onClick={handleConfirm} color="primary">
            확인
          </AgreeBtn>
        </DialogActions>
      </Dialog>
</RegisterRight>
        </DialogContent>
      </Dialog></>
   
  );
}
const SearchBtn=styled.button`
width: 71px;
height: 34px;
border-radius: 8px;
border: none;
cursor: pointer;
background-color: #37508B;
font-size: 14px;
font-weight: 700;
color: white;
`

const RegisterMarketSearchInput=styled.input`
width: 100%;
height: 34px;
border: 1px solid #d9d9d9;
border-radius: 5px;
text-indent: 16px;
`

const RegisterMarketSearchRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 8px;
gap: 25px;
width: 455.5px;
`
const SameTimeSelect=styled.select`
width: 228px;
height: 34px;
border: 1px solid #d9d9d9;
color: #666666;
border-radius: 5px;
`
const SameTimeRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
font-size: 14px;
font-weight: 400;
color: #333333;
`
const FolderTabs=styled.div`
display: flex;
flex-direction: row;
`
const EmptyTab=styled.div`
width: 100%;
height: 37px;
border-bottom : 1px solid #d9d9d9;
`
const InfoTab=styled.div`
background-color: white;
width: 246px;
height: 37px;
display: flex;
align-items: center;
justify-content: center; 
font-size: 18px;
font-weight: 400;
color: #101010;
border-right: 1px solid #d9d9d9;
border-bottom: 1px solid white;
`
const FolderLayout=styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 19px;
border: 1px solid #d9d9d9;
background-color: #f9f9f9;
`
const StyledDialogTableCell = styled(TableCell)`
  border-top: none;
`;
const RegisterChkRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 9px;
font-size: 14px;
color: #333333;
margin-bottom: 16px;
`
const RegisterOptionTitle=styled.div`
margin-top: 35px;
font-size: 20px;
font-weight: 700;
color: #666666;
margin-bottom: 15px;
`

const MarketRegisterTitle=styled.div`
margin-top: 46px;
margin-bottom: 8px;
font-family: Satoshi;
font-size: 20px;
font-weight: 700;
color: #666666;
`
const MarketRegisterSelect=styled.select`
width: 347px;
height: 34px;
border: 1px solid #d9d9d9;
color: #666666;
border-radius: 5px;
`
const ChartWrapper = styled.div`
  width: 531px;
  height: 360px;
`;
const StyledDialogTableHead = styled(TableHead)`
border-top: none;  
background-color: white;
  border-bottom: 1px solid #e4d49;
  // box-shadow: none; 
`;

const RegisterLeft=styled.div`
display: flex;
flex-direction: column;
`
const RegisterTitle=styled.div`
font-size: 20px;
font-weight: 700;
color: #666666;
margin-bottom: 26px;
`

const RegisterRight=styled.div`
display: flex;
flex-direction: column;

`
const CustomSnackbarAlert = styled(Alert)`
  background-color: #333333 !important;
  color: white !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  justify-content: center;
color: ;
  & .MuiAlert-icon {
    display: none;
  }
`;

const EndBtn=styled.button`
width: 96px;
height: 30px;
border: 1px solid #335A97;
border-radius: 5px;
color: white;
background-color: #335A97;
display: flex;
align-items: center;
font-size: 14px;
cursor: pointer;
`
const PauseBtn=styled.button`
width: 96px;
height: 30px;
border: 1px solid #335A97;
border-radius: 5px;
color: #335A97;
background-color: #E6EEFA;
display: flex;
align-items: center;
font-size: 14px;
cursor: pointer;
`

const StartBtn=styled.button`
width: 96px;
height: 30px;
border: 1px solid #335A97;
border-radius: 5px;
color: #335A97;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
cursor: pointer;
`

const AgreeBtn=styled.button`
width: 79px;
height: 30px;
border-radius: 5px;
background-color: white;
cursor: pointer;
color: white;
background-color: #335A97;
border: none;
`
const CancelBtn=styled.button`
width: 79px;
height: 30px;
border-radius: 5px;
background-color: white;
cursor: pointer;
color: #335A97;
background-color: #E6EEFA;
border: none;
`
const CloseBtn=styled.button`
width: 60px;
height: 30px;
border: 1px solid #335A97;
border-radius: 5px;
color: #335A97;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
cursor: pointer;
`
const RegisterBtns=styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 28px;
align-items: center;
justify-content: flex-end;
cursor: pointer;
margin-top: 30px;
`
export const StyledTextarea = styled(TextareaAutosize)`
margin-top: 19px;
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.5;
  resize: none;  /* 드래그해서 사이즈 조정 막기 */
  background-color: #f5f5f5;
  overflow-y: scroll;  /* 스크롤이 가능하도록 */
  
  &:focus {
    outline: none;
    border-color: #335a97;  /* 포커스 시 테두리 색 변경 */
    box-shadow: 0 0 0 2px rgba(51, 90, 151, 0.2);  /* 포커스 시 외곽선 */
  }
`;