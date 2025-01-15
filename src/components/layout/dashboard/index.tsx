'use client'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from './components/appBar';
import Drawer from './components/drawer';
import CustomList from './components/CustomList';
import { Tooltip } from '@mui/material';
import { AuthService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useAlert } from '@/contexts/alertContext';
import { UserStorage } from '@/storages/userStorage';
import { AuthStorage } from '@/storages/authStorage';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authContext';
import { miniDrawerStyles } from './styles';

const drawerWidth = 240;

export default function MiniDrawer({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();
  const theme = useTheme();
  const { showAlert } = useAlert();
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getFirstAndLastName = (fullName: string): string => {
    const [firstName = '', ...rest] = fullName.trim().split(' ');
    const lastName = rest.pop() || '';
    return `${firstName} ${lastName}`;
  };

  const { mutate } = useMutation<boolean, Error, void>({
    mutationFn: () => AuthService.logout(),
    onError: (error) => {
      if (isAxiosError(error)) {
        showAlert(error.response?.data.message, 'error');
      }
    },
    onSuccess: () => {
      showAlert('Encerrando sessão. Até breve!', 'success');
      UserStorage.removeUser();
      AuthStorage.removeToken();
      push('/');
    },
  });

  return (
    <Box sx={miniDrawerStyles.root}>
      <CssBaseline />
      <AppBar
        open={open}
        drawerWidth={drawerWidth}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={miniDrawerStyles.menuButton(open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
        <Box sx={miniDrawerStyles.drawerHeader(theme)}>
          <Box sx={miniDrawerStyles.userInfoContainer}>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {user && getFirstAndLastName(user.name)}
              </Typography>
              <Typography fontSize={10}>{user?.email}</Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        <Divider />
        <CustomList open={open} setOpen={setOpen} />
        <Divider />
        <Tooltip title={`${!open ? 'Sair' : ''}`} placement="right">
          <Box component="button" onClick={() => mutate()} sx={miniDrawerStyles.logoutButton(open)}>
            <Typography sx={miniDrawerStyles.logoutText(open)}>Sair</Typography>
            <LogoutIcon />
          </Box>
        </Tooltip>
      </Drawer>
      <Box component="main" sx={miniDrawerStyles.main}>
        <Box sx={miniDrawerStyles.drawerHeader(theme)} />
        {children}
      </Box>
    </Box>
  );
}
