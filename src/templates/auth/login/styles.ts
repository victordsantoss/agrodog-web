import { SxProps, Theme } from '@mui/material';
import defaultTheme from '@/configs/styles/theme/default-theme';

export const loginFormStyles: {
  sections: Record<'form' | 'image', SxProps<Theme>>;
} = {
  sections: {
    form: {
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      [defaultTheme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    image: {
      width: '40%',
      display: 'flex',
      justifyContent: 'center',
      [defaultTheme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  },
};
