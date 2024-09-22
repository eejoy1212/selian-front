import * as React from 'react';
import { BanManageActiveTab, BanManageInActiveTab, BanManageLayout, BanManagePaper, BanManageTabs } from './BanManage';
import styled from 'styled-components';
import IOSSwitch from '../components/Btn/IOSSwitch';
import { CustomRadio } from '../components/Btn/CustomRadio';
import { SiteApiTabs } from '../components/Btn/SiteApiTabs';
import { APIChkBtn, ChangeInput, ImgChangeBtn, ImgTxtfieldRow, ImgTxtfieldSet, MarketAddBtn, MarketAddRow, MarketApiBtns, MarketApiSelect, MarketCancelBtn, MarketDelBtn, MarketEditBtn, MarketFormContentWrapper, MarketFormInput, MarketFormRow, MarketFormTitle, MarketFormWrapper, RadioRow, RadioSet, SendTemplateSelect, TxtFieldSet, TxtfieldTitle } from './SiteApi';

export interface ICoupangProps {
}

export function Coupang (props: ICoupangProps) {
    const [checked, setChecked] = React.useState(false);
    const [formNumber,setFormNumber]=React.useState(1)
    const addForm=()=>{
        setFormNumber(p=>p+1)
      }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  return (
    <BanManageLayout>
<SiteApiTabs/>
      <BanManagePaper>
        <MarketAddRow>
            <MarketApiSelect>
                <option>신규 마켓</option>
            </MarketApiSelect>
<MarketAddBtn onClick={addForm}>마켓 추가</MarketAddBtn>
<IOSSwitch/>
        </MarketAddRow>
        {Array.from({ length: formNumber }).map(v=> <MarketFormWrapper>
    {/* 첫번째 줄 */}
<MarketFormRow>
    <MarketFormTitle>API키값</MarketFormTitle>
    <MarketFormContentWrapper>
    <TxtFieldSet><TxtfieldTitle>애플리케이션 ID</TxtfieldTitle>
    <MarketFormInput/>
    </TxtFieldSet>
    <TxtFieldSet><TxtfieldTitle>업체코드</TxtfieldTitle>
    <MarketFormInput/>
    </TxtFieldSet>
    <TxtFieldSet><TxtfieldTitle>액세스 키</TxtfieldTitle>
    <MarketFormInput/>
    </TxtFieldSet>
    <TxtFieldSet><TxtfieldTitle>시크릿 키</TxtfieldTitle>
    <MarketFormInput/>
    <APIChkBtn>검증</APIChkBtn>
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
</MarketFormWrapper>)}

      </BanManagePaper>
      <MarketApiBtns>
        <MarketDelBtn>API 삭제</MarketDelBtn>
        <MarketCancelBtn>취소</MarketCancelBtn>
        <MarketEditBtn>수정</MarketEditBtn>
      </MarketApiBtns>
    </BanManageLayout>
  );
}
