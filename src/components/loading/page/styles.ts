import defaultTheme from "@/configs/styles/theme/defaultTheme";
import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: defaultTheme.palette.primary.main,
  height: '100vh'
}