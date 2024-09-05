import * as React from 'react';
import styled from 'styled-components';
import { CustomRadio } from '../components/Btn/CustomRadio';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { CloseSharp } from '@mui/icons-material';

export interface IEtcSettingProps {
}

export function EtcSetting (props: IEtcSettingProps) {
    const [openTranslate,setOpenTranslate]=React.useState(false)
    const onClickOpenTrans=()=>{

        setOpenTranslate(true)
    }
    const onClickCloseTrans=()=>{

        setOpenTranslate(false)
    }
  return (
    <EtcSettingLayout>
        {/* 번역툴 관리 창 */}
        <Dialog open={openTranslate}
          sx={{
            '& .MuiDialog-paper': {
              width: '630px', // 다이얼로그 창의 너비를 685px로 지정
              maxWidth: 'none', // 최대 너비 제한을 없애기 위해 설정
            },
          }}
        >

            <DialogContent
         
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
        <span>번역 툴 관리</span>
        <IconButton
        
        onClick={onClickCloseTrans}>
          <CloseSharp sx={{
            width:"20px"
          }}/>
        </IconButton>
        </DialogTitle>
        {/* 번역사이트 선택 */}
        <DialogSubTitle>번역 사이트 선택</DialogSubTitle>
        <TransBtns>
            <InActiveTransBtn>구글번역</InActiveTransBtn>
            <ActiveTransBtn>파파고</ActiveTransBtn>
        </TransBtns>
        {/* API 키 리스트 */}
        <DialogAPITitle>
            <span>API키 리스트</span><APIBtn>API키 추가</APIBtn>
            </DialogAPITitle>
            <APIRow>
                <APIFileInput placeholder='파일명'/>
                <APIKeyInput placeholder='API키 입력'/>
                <APIDelBtn>삭제</APIDelBtn>
                <APIChkBtn>API키 확인사이트 접속</APIChkBtn>
            </APIRow>
            <APIRow>
                <APIFileInput placeholder='파일명'/>
                <APIKeyInput placeholder='API키 입력'/>
                <APIDelBtn>삭제</APIDelBtn>
                <APIChkBtn>API키 확인사이트 접속</APIChkBtn>
            </APIRow>
            <DialogConfirmRow>
       <DialogConfirmBtn>확인</DialogConfirmBtn>

            </DialogConfirmRow>
            </DialogContent>
        </Dialog>
        {/* 기본정보 */}
      <EtcPaper>
        <EtcBasicTitle>기본정보</EtcBasicTitle>
        <EtcSettingFormWrapper>
                {/* 첫번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>API키값</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
        <span
        
        style={{
            marginBottom:"23px"
        }}
        >카카오톡</span>
  
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
                {/* 두번째 줄 */}
                <EtcSettingFormRow>
    <EtcSettingFormTitle>휴대폰 번호 입력</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
 <PhoneInputSet>
    <PhoneInput placeholder='휴대폰 번호'/>
    <PhoneBtn>인증번호 받기</PhoneBtn>
 </PhoneInputSet>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
{/* 세번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>인증번호 입력</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
 <PhoneInputSet>
    <PhoneInput placeholder='휴대폰 번호'/>
    <PhoneBtn>확인</PhoneBtn>
 </PhoneInputSet>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
{/* 네번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>사업자 등록증</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
 <FileRow>
    <FileBtn>파일 선택</FileBtn>
    <span>파일명.jpg</span>
 </FileRow>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
        </EtcSettingFormWrapper>
      </EtcPaper>
              {/* 상품 옵션 기본 설정 */}
              <EtcPaper>
        <EtcBasicTitle>상품 옵션 기본 설정</EtcBasicTitle>
        <EtcSettingFormWrapper>
                {/* 첫번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>기본 마진 템플릿</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
      <MarginSelect>
        <option>마진 템플릿 1번</option>
      </MarginSelect>
  
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
                {/* 두번째 줄 */}
                <EtcSettingFormRow>
    <EtcSettingFormTitle>마진율 적용 가격</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
<RadioSetRow>
    <RadioSet><CustomRadio
    checked
    />
    <span>원가</span>
    </RadioSet>
    <RadioSet><CustomRadio
    checked={false}
    />
    <span>판매가</span>
    </RadioSet>
</RadioSetRow>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
{/* 세번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>상품명 추가(앞)</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
<GiftAddInput placeholder='[상품명 앞에 추가할 멘트를 입력해 주세요.]'/>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
{/* 네번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>상품명 추가(뒤)</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
    <GiftAddInput placeholder='[상품명 뒤에 추가할 멘트를 입력해 주세요.]'/>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
{/* 다섯번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>번역툴 설정</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
        <PhoneInputSet>
        <MarginSelect>
        <option>구글 번역</option>
      </MarginSelect>
      <ToolBtn
      onClick={onClickOpenTrans}>번역툴 관리</ToolBtn>
        </PhoneInputSet>
  
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
{/* 여섯번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>중복상품 수집 제외</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
    <RadioSetRow>
    <RadioSet><CustomRadio
    checked
    />
    <span>On</span>
    </RadioSet>
    <RadioSet><CustomRadio
    checked={false}
    />
    <span>Off</span>
    </RadioSet>
</RadioSetRow>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
{/* 일곱번째 줄 */}
<EtcSettingFormRow>
    <EtcSettingFormTitle>무료배송여부</EtcSettingFormTitle>
    <EtcSettingFormContentWrapper>
    <RadioSetRow>
    <RadioSet><CustomRadio
    checked
    />
    <span>On</span>
    </RadioSet>
    <RadioSet><CustomRadio
    checked={false}
    />
    <span>Off</span>
    </RadioSet>
</RadioSetRow>
    </EtcSettingFormContentWrapper>
</EtcSettingFormRow>
        </EtcSettingFormWrapper>
      </EtcPaper>
<EtcSettingBtns>
    <CancelBtn>취소</CancelBtn>
    <EditBtn>수정</EditBtn>
</EtcSettingBtns>
    </EtcSettingLayout>
  );
}
const DialogConfirmRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: center;
`
const DialogConfirmBtn=styled.button`
background-color: #87A2E3;
width: 410px;
height: 40px;
border-radius: 5px;
color:white;
font-size: 14px;
font-weight: 700;
border: none;
margin-top: 61px;
`
const APIChkBtn=styled.button`
background-color: #7599EF;
width: 170;
height: 40px;
border-radius: 5px;
color:white;
font-size: 14px;
font-weight: 700;
border: 1px solid #335A97;
`
const APIDelBtn=styled.button`
background-color: #DCDCDC;
width: 53px;
height: 40px;
border-radius: 5px;
color:white;
font-size: 14px;
border: none;
`
const APIKeyInput=styled.input`
background-color: #F4F4F4;
border: none;
color: #666666;
font-size: 14px;
border-radius: 5px;
width: 228px;
height: 40px;
text-align: left;
text-indent: 12px;

&:focus {
  outline: none;
  border-color: #888; /* 포커스 시 테두리 색 변경 */
}
`
 const APIFileInput=styled.input`
  background-color: #F4F4F4;
  border: none;
  color: #666666;
  font-size: 14px;
  border-radius: 5px;
  width: 96px;
  height: 40px;
  text-align: left;
  text-indent: 12px;

  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
const APIRow=styled.div`
display: flex;
flex-direction: row;
gap: 11px;
align-items: center;
margin-bottom: 10px;
`
const APIBtn=styled.button`
background-color: #335A97;
width: 94px;
height: 30px;
border-radius: 5px;
color:white;
font-size: 14px;
border: none;
`
const TransBtns=styled.div`
display: flex;
flex-direction: row;
gap: 23px;
`
const InActiveTransBtn=styled.button`
background-color: #E6EEFA;
width: 94px;
height: 30px;
border-radius: 5px;
color:#335A97;
font-size: 14px;
border: none;
`
const ActiveTransBtn=styled.button`
background-color: #61A0FF;
width: 94px;
height: 30px;
border-radius: 5px;
color:white;
font-size: 14px;
border: none;
`
const DialogSubTitle=styled.div`
font-size: 16px;
font-weight: 700;
color: #666666;
margin-bottom: 17px;
`
const DialogAPITitle=styled.div`
font-size: 16px;
font-weight: 700;
color: #666666;
margin-bottom: 17px;
margin-top: 47px;
display: flex;
flex-direction: row;
gap: 22px;
align-items: center;
`
const EditBtn=styled.button`
width: 93px;
height: 30px;
border-radius: 5px;
border: 1px solid #335A97;
color: white;
font-size: 14px;
background-color: #335A97 ;
`
const CancelBtn=styled.button`
width: 82px;
height: 30px;
border-radius: 5px;
border: 1px solid #335A97;
color: #335A97;
font-size: 14px;
background-color: white;
`
const EtcSettingBtns=styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 33px;
margin-bottom: 22px;
`
const ToolBtn=styled.button`
width: 140px;
height: 37px;
gap: 0px;
border-radius: 5px;
border: none;
color: white;
font-size: 14px;
background-color:#335A97;
`
const RadioSet=styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const RadioSetRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 14px;
font-size: 14px;
font-weight: 400;
margin-bottom: 10px;
`
const MarginSelect=styled.select`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 14px;
  border-radius: 5px;
  width: 211px;
  height: 37px;
  text-align: left;
  text-indent: 17px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
const FileRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 12px;
font-weight: 500;
font-size: 16px;
color: #666666;
padding-bottom: 10px;
`
const FileBtn=styled.button`
width: 78px;
height: 25px;
gap: 0px;
border-radius: 5px;
border: 1px solid #37508B;
color: #37508B;
font-size: 12px;
background-color: white;
`
const PhoneBtn=styled.button`
width: 103.3px;
height: 36px;
gap: 0px;
border-radius: 5px;
border: none;
color: white;
font-size: 14px;
background-color: #335A97;

`
const PhoneInputSet=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 31px;
margin-bottom: 12px;
`
export const GiftAddInput=styled.input`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 14px;
  border-radius: 5px;
  width: 382px;
  height: 37px;
  text-align: left;
  text-indent: 13px;

  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
export const PhoneInput=styled.input`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 14px;
  border-radius: 5px;
  width: 211px;
  height: 37px;
  text-align: left;
  text-indent: 13px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
export const EtcSettingFormContentWrapper=styled.div`
padding-top: 17px;
padding-left: 18px;
display: flex;
flex-direction: column;
font-weight: 600;
font-size: 16px;
`
export const EtcSettingFormTitle=styled.div`
background-color:#F6F6F6;
width: 225px;
padding-top: 16px;
text-indent: 50px;
`
export const EtcSettingFormRow=styled.div`
display: flex;
flex-direction: row;
`
export const EtcSettingFormWrapper=styled.div`
display: flex;
flex-direction: column;
width: calc(100% - 19px - 19px);
margin-left: 19px;
margin-right: 19px;
background-color: white;
border-top: 1px solid #333333;
margin-bottom: 20px;
`
export const EtcBasicTitle=styled.div`
margin-left: 77px;
margin-top: 24px;
margin-bottom: 13px;
font-size: 20px;
color: #333333;
font-weight: 600;
`
export const EtcPaper=styled.div`
background-color: white;
width: 100%;
border: 1px solid #d9d9d9;
`
export const EtcSettingLayout=styled.div`
display: flex;
flex-direction: column;
gap: 22px;
margin-top: 41px;
margin-left: 32px;
margin-right: 32px;
min-height: calc(100vh - 60px - 42px);
width: calc(100% - 32px - 32px); 
`