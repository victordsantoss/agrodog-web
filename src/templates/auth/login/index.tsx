'use client';

import { defaultContainerStyles } from '@/common/utils/styles';
import { Box, Divider, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { containerStyle, dividerStyles, sectionStyles, formStyles } from './styles';
import LoginForm from './components/form';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/auth';
import { isAxiosError } from 'axios';
import { useAlert } from '@/contexts/alertContext';
import { AuthStorage } from '@/storages/authStorage';
import { useAuth } from '@/contexts/authContext';

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
      await persistUser(token)
      showAlert('Usuário autenticado com sucesso!', 'success');
      push('home')
    },
  });

  return (
    <Box sx={{ ...defaultContainerStyles }}>
      <Box sx={containerStyle}>
        <Box sx={sectionStyles.form}>
          <Box>
            <Typography variant="h3" sx={formStyles.title}>
              {title}
            </Typography>
            <Typography variant="body2" sx={formStyles.subTitle}>
              {subTitle}
            </Typography>
          </Box>
          <Box sx={formStyles.registerContainter}>
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
                sx={formStyles.register}
              >
                Registre-se
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem sx={dividerStyles.section}>
          <PetsIcon sx={dividerStyles.icon} />
        </Divider>
        <Box sx={sectionStyles.image}>
          <Image width={300} height={450} src={'/assets/dog1.png'} alt={'Cachorro fofo'} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginTemplate;
