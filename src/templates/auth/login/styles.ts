import { SxProps, Theme } from '@mui/material';
import defaultTheme from '@/configs/styles/theme/defaultTheme';

export const loginStyles: {
  container: SxProps<Theme>;
  sections: Record<'form' | 'image', SxProps<Theme>>;
  form: Record<'title' | 'subTitle' | 'register' | 'registerContainter', SxProps<Theme>>;
  divider: Record<'section' | 'icon', SxProps<Theme>>;
} = {
  container: {
    backgroundColor: defaultTheme.palette.background.default,
    padding: 4,
    borderRadius: 2,
    width: 920,
    height: 'auto',
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'flex',
    gap: 4,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
  },

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

  form: {
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: defaultTheme.palette.primary.main,
    },
    subTitle: {
      textAlign: 'center',
      color: defaultTheme.palette.primary.main,
    },
    registerContainter: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
    register: {
      color: 'primary.main',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },

  divider: {
    section: {
      [defaultTheme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    icon: {
      color: defaultTheme.palette.primary.main,
      fontSize: 32,
    },
  },
};
