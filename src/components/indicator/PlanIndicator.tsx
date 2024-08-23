import { Box, LinearProgress } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { blue4 } from '../../const/colors';

export interface IPlanIndicatorProps {
}

export function PlanIndicator (props: IPlanIndicatorProps) {
  return (
    <PlanIndicatorWrapper>
     
      <Box sx={{ width: '327px' }}>
        <StyledLinearProgress 
        sx={{
            height:"8px",
            backgroundColor:"#E4E4E9"
        }}
        variant="determinate" value={10} />
      </Box>
    </PlanIndicatorWrapper>
  );
}

const PlanIndicatorWrapper = styled.div`
  width: 405px;
  height: 40px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const StyledLinearProgress = styled(LinearProgress)`
  & .MuiLinearProgress-bar {
    background-color: #FC6F21;
  }
  height: 8px;
  border-radius: 5px;
  background-color: #E4E4E9;
`;
