import * as React from 'react';
import styled from 'styled-components';

export interface IAnnouncementProps {
}

export function Announcement (props: IAnnouncementProps) {
  return (
    <AnnouncementWrapper>
      
    </AnnouncementWrapper>
  );
}
const AnnouncementWrapper = styled.div`
width: 775px;
display: flex;
flex-direction: column;
gap: 12px;
`