import { SxProps, Theme } from '@mui/material';
import defaultTheme from '@/configs/styles/theme/defaultTheme';

export const containerStyle: SxProps<Theme> = {
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
};

export const sectionStyles: Record<'form' | 'image', SxProps<Theme>> = {
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
};


export const formStyles: Record<'title' | 'subTitle' | 'register', SxProps<Theme>> = {
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: defaultTheme.palette.primary.main
  },
  subTitle: {
    textAlign: 'center',
    color: defaultTheme.palette.primary.main
  },
  register: {
    color: 'primary.main',
    textDecoration: 'underline',
    cursor: 'pointer',
  }
}

export const dividerStyles: Record<'section' | 'icon', SxProps<Theme>> = {
  section: {
    [defaultTheme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  icon: {
    color: defaultTheme.palette.primary.main,
    fontSize: 32
  }

}
