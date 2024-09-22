import * as React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { CustomCheckbox } from '../Btn/CustomCheckbox';

export function DualListBox() {
  const initialLeftData = [
    { id: 1, market: '스마트 스토어', name: '네이버-A' },
    { id: 2, market: '쿠팡', name: '쿠팡-B' },
    { id: 3, market: '11번가', name: '11번가-C' },
    { id: 4, market: '알리', name: '알리-D' },
    { id: 5, market: '인터파크', name: '인터파크-E' },
    { id: 6, market: 'G마켓', name: 'G마켓-F' },
    { id: 7, market: '옥션', name: '옥션-G' },
    { id: 8, market: '롯데온', name: '롯데온-H' },
    { id: 9, market: '위메프', name: '위메프-I' },
    { id: 10, market: '티몬', name: '티몬-J' },
    // 더 많은 데이터 추가 가능
  ];

  const initialRightData = [
    { id: 11, market: 'G마켓', name: 'G마켓-D' },
    { id: 12, market: '옥션', name: '옥션-E' },
    { id: 13, market: '쿠팡', name: '쿠팡-F' },
    { id: 14, market: '롯데온', name: '롯데온-G' },
    { id: 15, market: '옥션', name: '옥션-H' },
  ];

  // 왼쪽, 오른쪽 테이블의 데이터를 관리합니다.
  const [leftData, setLeftData] = React.useState(initialLeftData.slice(0, 5));
  const [rightData, setRightData] = React.useState(initialRightData.slice(0, 5));
  
  // 로드할 다음 데이터의 인덱스를 추적합니다.
  const [leftDataIndex, setLeftDataIndex] = React.useState(5);
  const [rightDataIndex, setRightDataIndex] = React.useState(5);

  const [selectedLeft, setSelectedLeft] = React.useState<number[]>([]);
  const [selectedRight, setSelectedRight] = React.useState<number[]>([]);

  // 왼쪽 -> 오른쪽으로 데이터 이동
  const moveToRight = () => {
    const itemsToMove = leftData.filter(item => selectedLeft.includes(item.id));
    setRightData(prev => [...prev, ...itemsToMove]);
    setLeftData(prev => prev.filter(item => !selectedLeft.includes(item.id)));
    setSelectedLeft([]); // 선택 상태 초기화
  };

  // 오른쪽 -> 왼쪽으로 데이터 이동
  const moveToLeft = () => {
    const itemsToMove = rightData.filter(item => selectedRight.includes(item.id));
    setLeftData(prev => [...prev, ...itemsToMove]);
    setRightData(prev => prev.filter(item => !selectedRight.includes(item.id)));
    setSelectedRight([]); // 선택 상태 초기화
  };

  const toggleLeftSelection = (id: number) => {
    setSelectedLeft(prev =>
      prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]
    );
  };

  const toggleRightSelection = (id: number) => {
    setSelectedRight(prev =>
      prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]
    );
  };

  // 전체 선택/해제 처리
  const selectAllLeft = (checked: boolean) => {
    setSelectedLeft(checked ? leftData.map(item => item.id) : []);
  };

  const selectAllRight = (checked: boolean) => {
    setSelectedRight(checked ? rightData.map(item => item.id) : []);
  };

  // 인피니트 스크롤 기능: 스크롤이 바닥에 닿으면 데이터 추가 로드
  const handleScroll = (e: React.UIEvent<HTMLDivElement>, table: 'left' | 'right') => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight) {
      if (table === 'left' && leftDataIndex < initialLeftData.length) {
        const nextLeftData = initialLeftData.slice(leftDataIndex, leftDataIndex + 5);
        setLeftData(prev => [...prev, ...nextLeftData]);
        setLeftDataIndex(prev => prev + 5);
      } else if (table === 'right' && rightDataIndex < initialRightData.length) {
        const nextRightData = initialRightData.slice(rightDataIndex, rightDataIndex + 5);
        setRightData(prev => [...prev, ...nextRightData]);
        setRightDataIndex(prev => prev + 5);
      }
    }
  };

  return (
    <DialogTableRow>
      {/* 왼쪽 마켓 테이블 */}
      <TableContainer
        component={Paper}
        sx={{ minWidth: '455.5px', maxWidth: '455.5px', height: '200px', overflowY: 'auto' }}
        onScroll={(e) => handleScroll(e, 'left')}
      >
        <Table size="small" sx={{ border: '1px solid #d9d9d9' }} aria-label="simple table">
          <StyledDialogTableHead>
            <TableRow>
              <StyledDialogTableCell align="center">
                <CustomCheckbox
                  checked={selectedLeft.length === leftData.length && leftData.length > 0}
                  onChange={(checked) => selectAllLeft(checked)}
                />
              </StyledDialogTableCell>
              <StyledDialogTableCell align="center">번호</StyledDialogTableCell>
              <StyledDialogTableCell align="center">마켓</StyledDialogTableCell>
              <StyledDialogTableCell align="center">마켓이름</StyledDialogTableCell>
            </TableRow>
          </StyledDialogTableHead>
          <TableBody
          sx={{
            height:"100px",
          }}
          >
            {leftData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell align="center">
                  <CustomCheckbox
                    checked={selectedLeft.includes(row.id)}
                    onChange={() => toggleLeftSelection(row.id)} // 체크박스를 클릭할 때 선택 상태 변경
                  />
                </TableCell>
                <TableCell align="center">{leftData.length - index}</TableCell>
                <TableCell align="center">{row.market}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CircleArrowCol>
        <CircleArrow onClick={moveToRight}>
          <ArrowForwardIos sx={{ width: '16px' }} />
        </CircleArrow>
        <CircleArrow onClick={moveToLeft}>
          <ArrowBackIos sx={{ marginLeft: '4px', width: '16px' }} />
        </CircleArrow>
      </CircleArrowCol>

      {/* 오른쪽 마켓 테이블 */}
      <TableContainer
        component={Paper}
        sx={{ minWidth: '455.5px', maxWidth: '455.5px', height: '200px', overflowY: 'auto' }}
        onScroll={(e) => handleScroll(e, 'right')}
      >
        <Table size="small" sx={{ border: '1px solid #d9d9d9' }} aria-label="simple table">
          <StyledDialogTableHead>
            <TableRow>
              <StyledDialogTableCell align="center">
                <CustomCheckbox
                  checked={selectedRight.length === rightData.length && rightData.length > 0}
                  onChange={(checked) => selectAllRight(checked)}
                />
              </StyledDialogTableCell>
              <StyledDialogTableCell align="center">번호</StyledDialogTableCell>
              <StyledDialogTableCell align="center">마켓</StyledDialogTableCell>
              <StyledDialogTableCell align="center">마켓이름</StyledDialogTableCell>
            </TableRow>
          </StyledDialogTableHead>
          <TableBody>
            {rightData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell align="center">
                  <CustomCheckbox
                    checked={selectedRight.includes(row.id)}
                    onChange={() => toggleRightSelection(row.id)} // 체크박스를 클릭할 때 선택 상태 변경
                  />
                </TableCell>
                <TableCell align="center">{rightData.length - index}</TableCell>
                <TableCell align="center">{row.market}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DialogTableRow>
  );
}

// Styled Components
const DialogTableRow = styled.div`
  width: 1010px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const CircleArrowCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CircleArrow = styled.button`
  width: 36px;
  min-width: 36px;
  min-height: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6eefa;
  color: #335a97;
  cursor: pointer;
  margin-left: 33px;
  margin-right: 33px;
  border: none;
`;

const StyledDialogTableHead = styled(TableHead)`
  background-color: white;
  border-bottom: 1px solid #e4d49;
`;

const StyledDialogTableCell = styled(TableCell)`
  border-top: none;
`;
