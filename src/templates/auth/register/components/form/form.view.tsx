import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material"
import { RegisterFormValues } from "./form.schema";
import { formStyles } from "@/common/utils/styles";
import { Controller, FormProvider, UseFormReturn } from "react-hook-form";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { Format } from "@/common/utils/format";

interface IRegisterFormViewProps {
  push: (path: string) => void
  onSubmit: (values: RegisterFormValues) => void
  methods: UseFormReturn<RegisterFormValues>
  isPending: boolean
  showPassword: boolean
  handleTogglePasswordVisibility: () => void
}

export const RegisterFormView = (props: IRegisterFormViewProps) => {
  const { onSubmit, methods, isPending, showPassword, handleTogglePasswordVisibility, push } = props;

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
                onBlur={(e) => field.onChange(e.target.value.trim())}
                onChange={(e) => field.onChange(Format.cpf(e.target.value.trim()))}
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
        </Box>
        <Box
          sx={formStyles.buttonContainer}
        >
          <Button
            type="button"
            variant="outlined"
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