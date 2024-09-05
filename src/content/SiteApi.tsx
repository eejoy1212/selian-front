import * as React from 'react';
import { BanManageActiveTab, BanManageInActiveTab, BanManageLayout, BanManagePaper, BanManageTabs } from './BanManage';
import styled from 'styled-components';
import IOSSwitch from '../components/Btn/IOSSwitch';
import { CustomRadio } from '../components/Btn/CustomRadio';
import { SiteApiTabs } from '../components/Btn/SiteApiTabs';

export interface ISiteApiProps {
}

export function SiteApi (props: ISiteApiProps) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  return (
    <BanManageLayout>
<SiteApiTabs/>
      <BanManagePaper>
        <MarketAddRow>
            <MarketApiSelect>
                <option>스마트스토어(미국)</option>
            </MarketApiSelect>
<MarketAddBtn>마켓 추가</MarketAddBtn>
<IOSSwitch/>
        </MarketAddRow>
<MarketFormWrapper>
    {/* 첫번째 줄 */}
<MarketFormRow>
    <MarketFormTitle>API키값</MarketFormTitle>
    <MarketFormContentWrapper>
    <TxtFieldSet><TxtfieldTitle>애플리케이션 ID</TxtfieldTitle>
    <MarketFormInput/>
    </TxtFieldSet>
    <TxtFieldSet><TxtfieldTitle>시크릿 키</TxtfieldTitle>
    <MarketFormInput/>
    </TxtFieldSet>
    </MarketFormContentWrapper>
</MarketFormRow>
{/* 두번째 줄 */}
<MarketFormRow>
    <MarketFormTitle>배송 템플릿</MarketFormTitle>
    <MarketFormContentWrapper>
   <SendTemplateSelect>
    <option>배송비 템플릿 1</option>
   </SendTemplateSelect>
    </MarketFormContentWrapper>
</MarketFormRow>
{/* 세번째 줄 */}
<MarketFormRow>
    <MarketFormTitle>교환비</MarketFormTitle>
    <MarketFormContentWrapper>
   <ChangeInput placeholder='3000원'/>
    </MarketFormContentWrapper>
</MarketFormRow>
{/* 네번째 줄 */}
<MarketFormRow>
    <MarketFormTitle>반품비</MarketFormTitle>
    <MarketFormContentWrapper>
   <ChangeInput placeholder='5000원'/>
    </MarketFormContentWrapper>
</MarketFormRow>
{/* 다섯번째 줄 */}
<MarketFormRow>
    <MarketFormTitle>상하단 이미지</MarketFormTitle>
    <MarketFormContentWrapper>
  <RadioRow>
    <RadioSet><span>URL</span>
    <CustomRadio checked/>
    </RadioSet>
    <RadioSet><span>이미지 파일</span>
    <CustomRadio checked={false}/>
    </RadioSet>
  </RadioRow>
  <ImgTxtfieldRow>
  <span>상단</span>
  <ImgTxtfieldSet>
  <ChangeInput
  placeholder='파일을 첨부해 주세요'
  />
  <ImgChangeBtn>변경</ImgChangeBtn>
  </ImgTxtfieldSet>
  </ImgTxtfieldRow>
  <ImgTxtfieldRow>
  <span>하단</span>
  <ImgTxtfieldSet>
  <ChangeInput   placeholder='파일을 첨부해 주세요'/>
  <ImgChangeBtn>변경</ImgChangeBtn>
  </ImgTxtfieldSet>
  </ImgTxtfieldRow>
    </MarketFormContentWrapper>
</MarketFormRow>
</MarketFormWrapper>
      </BanManagePaper>
      <MarketApiBtns>
        <MarketDelBtn>API 삭제</MarketDelBtn>
        <MarketCancelBtn>취소</MarketCancelBtn>
        <MarketEditBtn>수정</MarketEditBtn>
      </MarketApiBtns>
    </BanManageLayout>
  );
}
export const MarketCancelBtn=styled.button`
width: 79px;
height: 30px;
border-radius: 5px;
background-color: white;
cursor: pointer;
border: 1px solid #335A97;
color: #335A97;
`
export const MarketEditBtn=styled.button`
width: 115px;
height: 30px;
border-radius: 5px;
background-color: #335A97;
cursor: pointer;
border: 1px solid #335A97;
color: white;
`
export const MarketDelBtn=styled.button`
width: 109px;
height: 30px;
border-radius: 5px;
background-color: #373737;
cursor: pointer;
border: 1px solid #373737;
color: white;
`
export const MarketApiBtns=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 34px;
margin-bottom: 34px;
`
export const ImgChangeBtn=styled.button`
height: 37px;
background-color: #335A97;
border: none;
border-radius: 5px;
color: white;
font-size: 14px;
min-width: 64px;
border-radius: 5px;
cursor: pointer;
margin-right: 54px;
`
export const ImgTxtfieldRow=styled.div`
display: flex;
flex-direction: row;
gap: 36px;
align-items: center;
font-size: 16px;
font-weight: 500;
color: #333333;
margin-bottom: 18px;
`
export const ImgTxtfieldSet=styled.div`
display: flex;
flex-direction: row;
gap: 23px;
align-items: center;
`
export const RadioRow=styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
margin-bottom: 9px;
`
export const RadioSet=styled.div`
display: flex;
flex-direction: row;
align-items: center;
font-size: 16px;
color: #333333;
gap: 8px;
`
export const ChangeInput=styled.input`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 14px;
  border-radius: 5px;
  width: 280px;
  height: 37px;
  text-align: left;
  text-indent: 9px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
export const SendTemplateSelect=styled.select`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 14px;
  border-radius: 5px;
  width: 280px;
  height: 37px;
  text-align: left;
  text-indent: 9px;
  &:focus {
    outline: none;
    border-color: #888; /* 포커스 시 테두리 색 변경 */
  }
`
export const MarketFormInput=styled.input`
width: 470px;
height: 37px;
border-radius: 5px;
border: 1px solid #999999;
`
export const TxtfieldTitle=styled.div`
width: 135px;
`
export const TxtFieldSet=styled.div`
font-size: 16px;
font-weight: 500;
color: #333333;
display: flex;
align-items: center;
margin-bottom: 21px;
`
export const MarketFormContentWrapper=styled.div`
padding-top: 25px;
padding-left: 42px;
padding-right: 42px;
display: flex;
flex-direction: column;
`
export const MarketFormRow=styled.div`
display: flex;
flex-direction: row;
`
export const MarketFormWrapper=styled.div`
display: flex;
flex-direction: column;
width: calc(100% - 73px - 73px);
margin-left: 73px;
margin-right: 73px;
background-color: white;
border-top: 1px solid #333333;
margin-bottom: 50px;
`
export const MarketFormTitle=styled.div`
background-color:#F6F6F6;
width: 240px;
padding-top: 39px;
text-indent: 78px;
`
export const MarketAddBtn=styled.button`
height: 36px;
background-color: #335A97;
border: none;
border-radius: 5px;
color: white;
font-size: 14px;
min-width: 103px;
border-radius: 5px;
cursor: pointer;
margin-right: 54px;
`
export const MarketAddRow=styled.div`
display: flex;
flex-direction: row;
margin-left: 73px;
margin-top: 35px;
margin-bottom: 29px;
align-items: center;
`
export const MarketApiSelect=styled.select`
  background-color: #ffffff;
  border: 1px solid #999999;
  font-size: 16px;
  border-radius: 5px;
  width: 241px;
  height: 37px;
  text-align: left;
  text-indent: 13px;
  margin-right: 35px;
  color: #333333;
    &:focus {
        outline: none;
        border-color: #888; /* 포커스 시 테두리 색 변경 */
    }
`