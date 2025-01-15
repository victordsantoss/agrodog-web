import { SxProps, Theme } from "@mui/material";

export const formStyles: {
  container: SxProps<Theme>;
  formContainer: SxProps<Theme>;
  buttonContainer: SxProps<Theme>;
} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  buttonContainer: {
    width: '50%',
    maxWidth: 300,
    display: 'flex',
    justifyContent: 'center',
    marginX: 'auto',
  },
};
