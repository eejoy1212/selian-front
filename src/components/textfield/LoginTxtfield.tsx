import { TextField } from '@mui/material';
import * as React from 'react';

export interface ILoginTxtfieldProps {
  type?: string;
  placeholder: string;
  width?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LoginTxtfield({
  type,
  placeholder,
  width,
  value,
  onChange,
}: ILoginTxtfieldProps): JSX.Element {
  return (
    <TextField
      type={type}
      variant="standard"
      value={value}
      onChange={onChange}
      InputProps={{
        disableUnderline: true,
        style: {
          paddingLeft: "10px", // 입력 텍스트 들여쓰기
        },
      }}
      placeholder={placeholder}
      sx={{
        "& .MuiInputBase-root": {
          width: width ?? "300px",
          height: "47px",
          fontWeight: 600,
          borderRadius: "6px",
          backgroundColor: "#F4F4F4",
        },
        "& .MuiInputBase-input::placeholder": {
          fontSize: "16px",
          textIndent: "10px",
          color: "#B9B8B8",
          opacity: 1,
        },
        "& .MuiInputBase-input": {
          textIndent: "10px", // 실제 입력 텍스트 들여쓰기
        },
      }}
      inputProps={{
        style: {
          textIndent: "10px", // 입력 텍스트 들여쓰기
        },
      }}
    />
  );
}
