import { Box, Divider, Typography } from "@mui/material"
import { defaultContainerStyles } from '@/common/utils/styles';

import PetsIcon from '@mui/icons-material/Pets';
import Image from "next/image";
import { authFormStyles } from "../styles";
import { loginFormStyles } from "./styles";

import { useRouter } from "next/navigation";
import LoginFormViewModel from "./components/form";

const title = 'Bem vindo(a) de volta';
const subTitle = 'Faça login para continuar explorando nossos serviços.';

export const LoginView = () => {
  const { push } = useRouter()
  return (
    <Box sx={{ ...defaultContainerStyles }}>
      <Box sx={authFormStyles.container}>
        <Box sx={loginFormStyles.sections.form}>
          <Box>
            <Typography variant="h3" sx={authFormStyles.form.title}>
              {title}
            </Typography>
            <Typography variant="body2" sx={authFormStyles.form.subTitle}>
              {subTitle}
            </Typography>
          </Box>
          <Box sx={authFormStyles.form.container}>
            <LoginFormViewModel />
            <Divider orientation="horizontal" variant="middle" flexItem>
              ou
            </Divider>
            <Typography variant="body2" textAlign="center" flex={1} component="div">
              Não tem conta?{' '}
              <Typography
                component="span"
                variant="body1"
                onClick={() => push('/register')}
                sx={authFormStyles.form.action}
              >
                Registre-se
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem sx={authFormStyles.divider.section}>
          <PetsIcon sx={authFormStyles.divider.icon} />
        </Divider>
        <Box sx={loginFormStyles.sections.image}>
          <Image width={300} height={450} src={'/assets/dog1.png'} alt={'Cachorro fofinho'} />
        </Box>
      </Box>
    </Box>
  )
}