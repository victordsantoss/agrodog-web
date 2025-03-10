import { z } from 'zod';

export const RegisterSchema = z.object({
  name: z
    .string({ required_error: 'O nome é obrigatório' })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .min(50, { message: 'O nome deve ter no máximo 50 caracteres' })
    .trim(),
  email: z
    .string({ required_error: 'O email é obrigatório' })
    .email('Insira um email válido')
    .trim(),
  cpf: z
    .string({ required_error: 'O cpf é obrigatório' })
  ,
  password: z
    .string({ required_error: 'A senha é obrigatório' })
});

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
