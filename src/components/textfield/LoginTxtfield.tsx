import { TextField } from '@mui/material';
import * as React from 'react';

export interface ILoginTxtfieldProps {
    placeholder:string;
    width?:string;
}

export function LoginTxtfield({placeholder,width}: ILoginTxtfieldProps) {
  return (
    <TextField
      variant="standard"
      InputProps={{
        disableUnderline: true, // underline 제거
        // style: {
        //   backgroundColor: "#F4F4F4",
        //   color: "#B9B8B8",
        // },
      }}
    //   inputProps={{
    //     style: {
    //       color: "#B9B8B8",
    //     },
    //   }}
      placeholder={placeholder} // 플레이스홀더 텍스트 지정
      sx={{
     
        "& .MuiInputBase-root": {
            width:width??"300px",
            height:"47px",
            fontWeight:600,
      borderRadius:"6px",
          backgroundColor: "#F4F4F4",
        },
        "& .MuiInputBase-input::placeholder": { 
            fontSize:"16px",     
            textIndent:"10px",
          color: "#B9B8B8", // 플레이스홀더 색상 지정
          opacity: 1, // 플레이스홀더 투명도 조정 (기본값은 0.42)
        },
      }}
    />
  );
}
