'use client'

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import CustomList from './components/menu/customList';
import { Tooltip } from '@mui/material';
import { AuthService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useAlert } from '@/contexts/alertContext';
import { UserStorage } from '@/storages/userStorage';
import { AuthStorage } from '@/storages/authStorage';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authContext';

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer({
  children,
}: {
  children: React.ReactNode
}) {
  const { push } = useRouter();
  const theme = useTheme();
  const { showAlert } = useAlert();
  const { user } = useAuth()
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
    return `${firstName} ${lastName}`
  };

  const { mutate } = useMutation<boolean, Error, void>({
    mutationFn: () => AuthService.logout(),
    onError: (error) => {
      if (isAxiosError(error)) {
        showAlert(error.response?.data.message, 'error');
      }
    },
    onSuccess: () => {
      UserStorage.removeUser();
      AuthStorage.removeToken();
      showAlert('Logout realizado com sucesso!', 'success');
      push('/')
    },
  });


  return (
    <Box sx={{ display: 'flex' }}>
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
            sx={{
              marginRight: 5,
              display: open ? 'none' : 'block',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        drawerWidth={drawerWidth}>
        <DrawerHeader
          sx={(theme) => ({
            color: theme.palette.primary.main,
            pl: 2.5,
            display: 'flex',
            justifyContent: 'space-between',
          })}>
          <Box sx={{
            display: 'flex',
            alignItems: 'justify-center',
            width: '100%',
            gap: 1,

          }}>
            <Box>
              <Typography
                variant='h6'
                fontWeight={'bold'}
              >
                {user && getFirstAndLastName(user.name)}
              </Typography>
              <Typography
                fontSize={10}
              >
                {user?.email}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <CustomList open={open} setOpen={setOpen} />
        <Divider />
        <Tooltip title={`${!open ? 'Sair' : ''}`} placement='right'>
          <Box
            component="button"
            onClick={() => mutate()}
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: open ? '95%' : '80%',
              display: 'flex',
              justifyContent: open ? 'flex-start' : 'center',
              alignItems: 'center',
              paddingX: 2,
              paddingY: 1,
              border: `1px solid ${theme.palette.secondary.main}`,
              borderRadius: theme.spacing(1),
            })}
          >
            <Typography
              sx={{
                marginLeft: 1,
                display: open ? 'flex' : 'none',
                justifyContent: 'end',
                mr: 'auto',
                fontWeight: 600
              }}
            >
              Sair
            </Typography>
            <LogoutIcon />
          </Box>
        </Tooltip>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>

    </Box >
  );
}

