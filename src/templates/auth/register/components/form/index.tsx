import { useRegisterFormModel } from "./form.model"
import { RegisterFormView } from "./form.view"



export const RegisterFormViewModel = () => {
  const registerFormMethods = useRegisterFormModel()
  return (
    <RegisterFormView
      {...registerFormMethods}
    />
  )
}

