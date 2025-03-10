'use client'

import { useRegisterModel } from "./register.model"
import RegisterView from "./register.view"

const RegisterTemplate = () => {
  const methods = useRegisterModel()
  return (
    <RegisterView
      {...methods}
    />
  )
}

export default RegisterTemplate