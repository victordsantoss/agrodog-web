import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material"
import { RegisterFormValues } from "./form.schema";
import { formStyles } from "@/common/utils/styles";
import { Controller, FormProvider, UseFormReturn } from "react-hook-form";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const formatCPF = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  const cpf = numbers.slice(0, 11);
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

interface IRegisterFormViewProps {
  push: (path: string) => void
  onSubmit: (values: RegisterFormValues) => void
  methods: UseFormReturn<RegisterFormValues>
  isPending: boolean
  showPassword: boolean
  handleTogglePasswordVisibility: () => void
  showConfirmPassword: boolean
  handleToggleConfirmPasswordVisibility: () => void
}

export const RegisterFormView = (props: IRegisterFormViewProps) => {
  const { onSubmit, methods, isPending, showPassword, handleTogglePasswordVisibility, showConfirmPassword, handleToggleConfirmPasswordVisibility, push } = props;

  return (
    <Box
      component='form'
      onSubmit={methods.handleSubmit(onSubmit)}
      sx={formStyles.container}
    >
      <FormProvider {...methods}>
        <Box sx={formStyles.formContainer}>
          <Controller
            name="email"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Email *"
                fullWidth
                placeholder="exemplo@email.com"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="outlined"
                onBlur={(e) => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="name"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Nome *"
                fullWidth
                placeholder="Agrodog S. S"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="outlined"
                onBlur={(e) => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="cpf"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="CPF *"
                fullWidth
                placeholder="000.000.000-00"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="outlined"
                onChange={(e) => {
                  const formatted = formatCPF(e.target.value);
                  field.onChange(formatted);
                }}
                inputProps={{
                  maxLength: 14
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={methods.control}
            render={({ field, fieldState }) => (
              <Box sx={{ position: 'relative' }}>
                <TextField
                  {...field}
                  label="Senha *"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            )}
          />
          <Controller
            name="confirmPassword"
            control={methods.control}
            render={({ field, fieldState }) => (
              <Box sx={{ position: 'relative' }}>
                <TextField
                  {...field}
                  label="Confirmar Senha *"
                  type={showConfirmPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleToggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    field.onChange(e);
                    if (methods.getValues('password') && e.target.value &&
                      methods.getValues('password') !== e.target.value) {
                      methods.setError('confirmPassword', {
                        type: 'manual',
                        message: 'As senhas não coincidem. Por favor, verifique e tente novamente.'
                      });
                    } else {
                      methods.clearErrors('confirmPassword');
                    }
                  }}
                />
              </Box>
            )}
          />
        </Box>
        <Box
          sx={formStyles.buttonContainer}
        >
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => push('/login')}
          >
            Voltar
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isPending || !methods.formState.isValid}
          >
            Registrar
          </Button>
        </Box>
      </FormProvider>
    </Box >
  )
}