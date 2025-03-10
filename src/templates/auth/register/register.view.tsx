import { Box, Typography } from "@mui/material"
import { useRegisterModel } from "./register.model"


type RegisterViewProps = ReturnType<typeof useRegisterModel>

const RegisterView = (props: RegisterViewProps) => {
  const {
    onSubmit,
    isPending,
    register,
    handleSubmit,
    errors,
    isSubmitting
  } = props;
  return (
    <Box>
      <Typography>
        Register Page
      </Typography>
    </Box>
  )
}

export default RegisterView