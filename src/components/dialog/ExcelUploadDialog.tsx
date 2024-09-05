import { CloseSharp } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

export interface IExcelUploadDialogProps {
    openUload:boolean;
    onCloseUpload:()=>void
}

export function ExcelUploadDialog ({openUload,onCloseUpload}: IExcelUploadDialogProps) {
  return (
    <Dialog open={openUload}>

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
  );
}
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

const UploadFileRow=styled.div`
display: flex;
flex-direction:row;
align-items:center;
gap: 8px;
margin-top:10px;
`
const FileNameInput=styled.input`
text-indent: 14px;
width: 194px;
height: 40px;
background-color:#F4F4F4;
border-radius:5px;
border: none;
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