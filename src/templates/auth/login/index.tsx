'use client';

import { useLoginModel } from "./login.model";
import { LoginView } from "./login.view";

const LoginViewModel = () => {
  const methods = useLoginModel()
  return (
    <LoginView
      {...methods}
    />
  );
};

export default LoginViewModel;
