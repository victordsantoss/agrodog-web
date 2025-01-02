import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

export const formContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2
};


export const buttonContainerStyle: SxProps<Theme> = {
  width: '50%',
  maxWidth: 300,
  display: 'flex',
  justifyContent: 'center',
  mx: 'auto',
};

