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
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Snackbar, TextareaAutosize } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, CheckCircle, Close, CloseSharp, Pause, PauseCircleFilled, PlayArrow, Stop } from '@mui/icons-material';
import { CustomCheck } from '../components/Btn/CustomCheck';
import AliSrc from '../images/company/ali.png'
import TaobaoSrc from '../images/company/taobao.png'
import AmazonSrc from '../images/company/amazon.png'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CustomCheckbox } from '../components/Btn/CustomCheckbox';
import { ActivePageBtn, InactivePageBtn, PageBtns, PageBtnsWrapper } from './AllGift';
import { ShowSelect } from './MarketRegister';
import { DualListBox } from '../components/Table/DualListBox';
import { MarketCancelBtn } from './SiteApi';

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

export interface GiftRegisterProps {}

export function GiftRegister(props: GiftRegisterProps) {
  const [logs, setLogs] = React.useState<string[]>(['2023.12.25 14:00 [상품명][등록마켓]등록']);
  const [isRunning, setIsRunning] = React.useState(false);
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout | null>(null);
  const [openUload,setOpenUpload]=React.useState(false)
  const [openMarketDialog,setOpenMarketDialog]=React.useState(false)
  const [registerOpen,setRegisterOpen]=React.useState(false)
  const [selectedRow, setSelectedRow] = React.useState<number | null>(null);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [agreeStop,setAgreeStop]=React.useState(false)
  //등록 시작
  const [startSnackbarOpen, setStartSnackbarOpen] = React.useState(false); 
  const logsEndRef = React.useRef<HTMLTextAreaElement>(null);
  const handleRowClick = (index: number) => {
    setSelectedRow(index); // 선택한 행의 인덱스를 상태로 저장
  };
  const onClickOpenRegisterDialog=()=>{
    setRegisterOpen(true)
  }
  const onClickCloseRegisterDialog=()=>{
    setRegisterOpen(false)
  }
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
  //등록 종료




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
  return (
    <GiftCheckLayout>
      {/* 결제 플랜 창 */}
      <Dialog open={false}
     sx={{
      '& .MuiDialog-paper': {
          minWidth: '1087px'
      }
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
        <span>결제 플랜 선택</span>
        <IconButton
        
        onClick={()=>{}}>
          <CloseSharp sx={{
            width:"20px"
          }}/>
        </IconButton>
        </DialogTitle>
        <PlanRow>
{/* 미니 플랜 */}
<PlanTile>
  
  <PlanMini>MINI</PlanMini>
  <SaleTxt>₩ 15,000</SaleTxt>
  <PriceTxt>₩ 7,599</PriceTxt>
  <PerTxt>Per month</PerTxt>
  <CharacterUl>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F9D300"
      }}/>
      <span>특징 1</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F9D300"
      }}/>
      <span>특징 2</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F9D300"
      }}/>
      <span>특징 3</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F9D300"
      }}/>
      <span>특징 4</span>
    </CharacterLi>
  </CharacterUl>
  <Flex/>
  <PlanBtnRow>
  <PlanMiniBtn>Start Mini Plan</PlanMiniBtn>
  </PlanBtnRow>
</PlanTile>
{/* 베이직 플랜 */}
<PlanTile>
  
  <PlanBasic>BASIC</PlanBasic>
  <SaleTxt>₩ 25,000</SaleTxt>
  <PriceTxt>₩ 10,000</PriceTxt>
  <PerTxt>Per month</PerTxt>
  <CharacterUl>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F97400"
      }}/>
      <span>특징 1</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F97400"
      }}/>
      <span>특징 2</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F97400"
      }}/>
      <span>특징 3</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F97400"
      }}/>
      <span>특징 4</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F97400"
      }}/>
      <span>특징 5</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#F97400"
      }}/>
      <span>특징 6</span>
    </CharacterLi>
  </CharacterUl>
  <Flex/>
  <PlanBtnRow>
  <PlanBasicBtn>Start Basic Plan</PlanBasicBtn>
  </PlanBtnRow>
</PlanTile>
{/* 디럭스 플랜 */}
<PlanTile>
  
  <PlanDelux>DELUXE</PlanDelux>
  <SaleTxt>₩ 50,000</SaleTxt>
  <PriceTxt>₩ 20,000</PriceTxt>
  <PerTxt>Per month</PerTxt>
  <CharacterUl>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#335A97"
      }}/>
      <span>특징 1</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#335A97"
      }}/>
      <span>특징 2</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#335A97"
      }}/>
      <span>특징 3</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#335A97"
      }}/>
      <span>특징 4</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#335A97"
      }}/>
      <span>특징 5</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#335A97"
      }}/>
      <span>특징 6</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#335A97"
      }}/>
      <span>특징 7</span>
    </CharacterLi>
  </CharacterUl>
  <Flex/>
  <PlanBtnRow>
  <PlanDeluxBtn>Start Deluxe Plan</PlanDeluxBtn>
  </PlanBtnRow>
</PlanTile>
{/* 프로 플랜 */}
<PlanTile>
  
  <PlanPro>PRO</PlanPro>
  <SaleTxt>₩ 120,000</SaleTxt>
  <PriceTxt>₩ 40,000</PriceTxt>
  <PerTxt>Per month</PerTxt>
  <CharacterUl>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 1</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 2</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 3</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 4</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 5</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 6</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 7</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 8</span>
    </CharacterLi>
    <CharacterLi>
      <CheckCircle sx={{
        color:"#101010"
      }}/>
      <span>특징 9</span>
    </CharacterLi>
  </CharacterUl>
  <Flex/>
  <PlanBtnRow>
  <PlanProBtn>Start Pro Plan</PlanProBtn>
  </PlanBtnRow>
</PlanTile>
        </PlanRow>
      </Dialog>
      {/* 상품 마켓 등록 현황 창 */}
      <Dialog open={registerOpen}
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
              <CustomCheckbox/>
              <span>상품 코드 중복검사</span>
            </RegisterChkRow>
             <RegisterChkRow>
              <CustomCheckbox/>
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
    <CloseBtn onClick={onClickCloseRegisterDialog}>닫기</CloseBtn>
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
      </Dialog>
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
            <span>수동 상품 등록</span>
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
      <Dialog 
      // open
      open={openUload}
      >

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
       {/* 마켓 등록을 시작합니다 알림을 위한 Snackbar */}
       {/* <Snackbar
        open={startSnackbarOpen}
        autoHideDuration={3000}  // 3초 후 자동 닫힘
        onClose={handleStartSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <CustomSnackbarAlert onClose={handleStartSnackbarClose} severity="info">
          등록을 시작합니다.
        </CustomSnackbarAlert>
      </Snackbar> */}
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
      <SearchRow>
        <SearchTxt>수집 URL</SearchTxt>
        <SearchInput placeholder='수집명 미입력 시 “소싱사이트+ URL 내 검색단어”로 자동입력 됩니다.' />
        <RegisterDateTxt>등록일자:</RegisterDateTxt>
        <DateInput/>
        <RangeTxt>~</RangeTxt> 
        <DateInput/>
        <SourcingTxt>소싱사이트</SourcingTxt>
        <SourcingSelect>
      <option value="amazon">아마존</option>
      <option value="ali">알리</option>
      <option value="taobao">타오바오</option>
    </SourcingSelect>
      </SearchRow>
    
      <TableWrapper>  
        <OptionRow>
           <Flex/>
        <ShowSelect>
      <option>
        10개씩보기
      </option>
      </ShowSelect></OptionRow> 
      <TableContainer 
      variant='elevation'
      component={Paper}>
        <Table size='small' aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="center">선택</StyledTableCell>
              <StyledTableCell align="center">No.</StyledTableCell>
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
                <TableCell align="center"><EditBtn onClick={onClickOpenRegisterDialog}>수정하기</EditBtn></TableCell>
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
      {/* <div
      style={{
        height:"100%"
      }}
      /> */}
    {/* 전체선택  */}
<AllRow>
  <CustomRadio checked/>
  <span>전체선택(4/11)</span>
<DeleteBtn>전체삭제</DeleteBtn>
</AllRow>
<CheckBtns>
<AllChkBtn>전체 등록</AllChkBtn>
<SelectChkBtn>선택상품 등록</SelectChkBtn>
<BanCodeBtn>선택 일괄 금지코드 설정</BanCodeBtn>
<BanCodeBtn
onClick={onClickOpenMarketDialog}
>수동 상품 등록</BanCodeBtn>
<Flex/>
<UploadBtn
onClick={onOpenUpload}
>엑셀파일 업로드</UploadBtn>
<DownloadBtn>엑셀파일 다운로드</DownloadBtn>
</CheckBtns>

    </GiftCheckLayout>
  );
}
const StyledTextarea = styled(TextareaAutosize)`
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
const PlanBtnRow=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 58px;
`
const PlanProBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #101010;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`
const PlanDeluxBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #335A97;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`
const PlanBasicBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #F97400;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`

const PlanMiniBtn=styled.button`
width: 210px;
height: 30px;
border-radius: 5px;
border: none;
background-color: #F9D300;
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
`
const CharacterLi=styled.li`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
color: #868A92;
font-size: 14px;
font-weight: 700;
`
const CharacterUl=styled.ul`
margin: 0;
padding: 0;
margin-left: 37px;
display: flex;
flex-direction: column;
gap: 12px; 
`
const PerTxt=styled.div`
font-size: 13px;
font-weight: 700;
color: #868A92;
margin-left: 39px;
margin-bottom: 34px;
`
const PriceTxt=styled.div`
font-size: 26px;
font-weight: 700;
color: #666666;
margin-left: 39px;
margin-bottom: 5px;
`
const SaleTxt=styled.div`
text-decoration: line-through;
color: #f88383;
font-size: 14px;
margin-left: 74px;
`
const PlanTile=styled.div`
display: flex;
flex-direction: column;
width: 275px;
height: 700px;
border-right: 1px solid #E4E4E9;
`
const PlanPro=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #101010;
margin-bottom: 18px;
`
const PlanDelux=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #335A97;
margin-bottom: 18px;
`
const PlanBasic=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #F97400;
margin-bottom: 18px;
`
const PlanMini=styled.div`
font-size: 16px;
font-weight: 600;
margin-left: 39px;
margin-top: 40px;
color: #F9D300;
margin-bottom: 18px;
`
const PlanRow=styled.div`
display: flex;
flex-direction: row;
border-top: 1px solid #e4e4e9;
`
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
const RegisterMarketTitle=styled.div`
text-indent: 19px;
font-size: 20px;
font-weight: 700;
color: #666666;
margin-bottom: 20px;
`
const RegisterMarketTableCol=styled.div`
display: flex;
flex-direction:column;
justify-content: flex-end;
`
const DialogTableRow=styled.div`
width: 1010px;
display: flex;
align-items: center;
flex-direction: row;
`
const CircleArrowCol=styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`
const CircleArrow=styled.button`
width: 36px;
min-width: 36px;
min-height: 36px;
height: 36px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
background-color: #E6EEFA;
color: #335A97;
cursor: pointer;
margin-left: 33px;
margin-right: 33px;
border: none;
`
const MarketAddBtn=styled.button`
width: 70px;
height: 30px;
border-radius: 5px;
border: 1px solid #335A97;
color: #335A97;
cursor: pointer;
font-size: 14px;
font-weight: 400;
background-color: white;
display: flex;
align-items: center;
gap: 6px;
text-indent: 5px;
`
const RegisterRight=styled.div`
display: flex;
flex-direction: column;

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
const OptionRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 37px;
margin-top: 15px;
margin-bottom: 24px;
`
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
const MarketRegisterTitle=styled.div`
margin-top: 46px;
margin-bottom: 8px;
font-family: Satoshi;
font-size: 20px;
font-weight: 700;
color: #666666;
`
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
margin-top: 20px;
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
const StyledDialogTableHead = styled(TableHead)`
border-top: none;  
background-color: white;
  border-bottom: 1px solid #e4d49;
  // box-shadow: none; 
`;

const StyledTableCell = styled(TableCell)`
  // border-top: 1px solid #6a6a6a;
  font-weight: bold !important; 
`;
const StyledDialogTableCell = styled(TableCell)`
  border-top: none;
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
