import * as React from 'react';
import styled from 'styled-components';
import { UseInfo } from './UseInfo';

export interface IMainProps {
}

export function Main (props: IMainProps) {
  return (
    <MainLayout>
      <UseInfo/>
    </MainLayout>
  );
}

const MainLayout=styled.div`
display: flex;
flex-direction: row;
margin-top: 44px;
width: calc(100% - 60px - 60px);
margin-left: 60px;
margin-right: 60px;
`