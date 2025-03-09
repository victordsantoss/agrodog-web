'use client';

import { defaultContainerStyles } from '@/common/utils/styles';
import { Box, Divider, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { loginStyles } from './styles';
import LoginForm from './components/form';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/auth';
import { isAxiosError } from 'axios';
import { useAlert } from '@/contexts/alert.context';
import { AuthStorage } from '@/storages/auth.storage';
import { useAuth } from '@/contexts/auth.context';

const title = 'Bem vindo(a) de volta';
const subTitle = 'Faça login para continuar explorando nossos serviços.';

const LoginTemplate = () => {
  const { push } = useRouter();
  const { showAlert } = useAlert();
  const { persistUser } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: (value: { email: string; password: string }) =>
      AuthService.login(value),
    onError: (error) => {
      if (isAxiosError(error)) {
        showAlert(error.response?.data.message, 'error');
      }
    },
    onSuccess: async (token: string) => {
      AuthStorage.setToken(token);
      persistUser(token)
      showAlert('Usuário autenticado com sucesso!', 'success');
      push('home')
    },
  });

  return (
    <Box sx={{ ...defaultContainerStyles }}>
      <Box sx={loginStyles.container}>
        <Box sx={loginStyles.sections.form}>
          <Box>
            <Typography variant="h3" sx={loginStyles.form.title}>
              {title}
            </Typography>
            <Typography variant="body2" sx={loginStyles.form.subTitle}>
              {subTitle}
            </Typography>
          </Box>
          <Box sx={loginStyles.form.registerContainter}>
            <LoginForm onSubmit={(values) => mutate(values)} isPending={isPending} />
            <Divider orientation="horizontal" variant="middle" flexItem>
              ou
            </Divider>
            <Typography variant="body2" textAlign="center" flex={1} component="div">
              Não tem conta?{' '}
              <Typography
                component="span"
                variant="body1"
                onClick={() => push('/')}
                sx={loginStyles.form.register}
              >
                Registre-se
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem sx={loginStyles.divider.section}>
          <PetsIcon sx={loginStyles.divider.icon} />
        </Divider>
        <Box sx={loginStyles.sections.image}>
          <Image width={300} height={450} src={'/assets/dog1.png'} alt={'Cachorro fofinho'} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginTemplate;
