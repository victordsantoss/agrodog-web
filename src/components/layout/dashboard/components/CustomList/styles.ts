import { SxProps, Theme } from '@mui/material';


export const customListStyles: {
  listItem: SxProps<Theme>;
  listItemButton: (open: boolean) => SxProps<Theme>;
  nestedListItemButton: (open: boolean) => SxProps<Theme>;
  listItemIcon: (open: boolean) => SxProps<Theme>;
  listItemText: (open: boolean) => SxProps<Theme>;
} = {
  listItem: {
    display: 'block',
  },

  listItemButton: (open: boolean) => ({
    minHeight: 48,
    px: 2.5,
    justifyContent: open ? 'initial' : 'center',
  }),

  nestedListItemButton: (open: boolean) => ({
    maxHeight: 48,
    pl: open ? 4 : 2.5,
    justifyContent: open ? 'initial' : 'center',
  }),

  listItemIcon: (open: boolean) => (theme: Theme) => ({
    minWidth: 0,
    justifyContent: 'center',
    mr: open ? theme.spacing(1) : 'auto',
  }),

  listItemText: (open: boolean) => (theme: Theme) => ({
    opacity: open ? 1 : 0,
    color: open ? theme.palette.primary.main : 'inherit',
  }),
};
