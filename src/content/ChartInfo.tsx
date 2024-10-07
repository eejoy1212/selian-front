import * as React from 'react';
import { MainCard } from './UseInfo';
import { TitleRow } from './Register';
import { ArrowForwardIos } from '@mui/icons-material';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import * as XLSX from 'xlsx';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export interface IChartInfoProps {}

export function ChartInfo(props: IChartInfoProps) {
  const navigate = useNavigate();
  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: '전년',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 50, 75],
        fill: false,
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1
      },
      {
        label: '금년',
        data: [28, 48, 40, 19, 86, 27, 90, 60, 45, 80, 70, 90],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '월별 유입 현황',
      },
    },
  };

  const goGiftChk = () => {
    navigate("/gift-check");
  };

  const handleExcelDownload = () => {
    const worksheetData = [
      ['월', '전년', '금년'],
      ...data.labels.map((label, index) => [
        label,
        data.datasets[0].data[index],
        data.datasets[1].data[index],
      ]),
    ];
    
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Chart Data');

    // Generate the filename with current date and time
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
    const filename = `${formattedDate}_${formattedTime}.xlsx`;

    XLSX.writeFile(workbook, filename);
  };

  return (
    <MainCard>
      <ChartCardContent>
        <TitleRow>
          <span>유입현황</span>
          <ArrowForwardIos style={{
              color: "#666666",
              width: "16px"
          }} />
        </TitleRow>
        {/* Chart.js Line Chart */}
        <ChartWrapper>
          <Line data={data} options={options} />
          <Btns>
            <Btn onClick={goGiftChk}>상품등록 바로가기</Btn>
            <ExcelBtn onClick={handleExcelDownload}>엑셀파일 다운로드</ExcelBtn>
          </Btns>
        </ChartWrapper>
      </ChartCardContent>
    </MainCard>
  );
}

export const ChartCardContent = styled.div`
  background-color: white;
  border: 1px solid #d9d9d9;
  margin: 10px 13px;
  display: flex;
  flex-direction: column; 
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  width: calc(100% - 200px);
  height: 280px;
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Btns = styled.div`
  width: 140px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 23px;
`;

const Btn = styled.button`
  width: 130px;
  height: 30px;
  font-size: 12px;
  background-color: #335A97;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;

const ExcelBtn = styled.button`
  width: 130px;
  height: 30px;
  font-size: 12px;
  background-color: #1F7145;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;
