'use client';

import { useLoginModel } from "./login.model";
import { LoginView } from "./login.view";


const LoginTemplate = () => {
  const methods = useLoginModel()

  return (
    <LoginView
      {...methods}
    />
  );
};

export default LoginTemplate;
