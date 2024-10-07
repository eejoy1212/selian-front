import * as React from 'react';
import styled from 'styled-components';
import { UseInfo } from './UseInfo';
import { Register } from './Register';
import { Announcement } from './Announcement';
import { ChartInfo } from './ChartInfo';
import { useNavigate } from 'react-router-dom';

export interface IMainProps {}

export function Main(props: IMainProps) {
  

  return (
    <MainLayout>
      <Top>
        <LeftTop> 
          <UseInfo />
          <Register />
        </LeftTop>
        <RightTop>
          <Announcement/>
        </RightTop>
      </Top>
      <ChartInfo/>
    </MainLayout>
  );
}

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RightTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 44px;
  width: calc(100% - 60px - 60px);
  margin-left: 60px;
  margin-right: 60px;
  min-height: calc(100vh - 60px - 45px);
`;
