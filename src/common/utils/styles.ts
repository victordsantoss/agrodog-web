import { Theme } from "@emotion/react"
import { SxProps } from "@mui/material"

const defaultContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
}

const formStyles: {
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
    width: '100%',
    maxWidth: 300,
    display: 'flex',
    gap: 2,
    justifyContent: 'center',
    marginX: 'auto',
  },
};


export {
  defaultContainerStyles,
  formStyles
}