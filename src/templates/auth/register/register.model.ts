
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AuthService } from "@/services/auth";
import { Auth } from "@/services/auth/auth.types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, RegisterSchema } from "./components/form/form.schema";

export const useRegisterModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormValues>({ resolver: zodResolver(RegisterSchema) })

  const { mutate, isPending } = useMutation<Auth.IRegisterResponse, AxiosError, RegisterFormValues>({
    mutationFn: (payload: RegisterFormValues) => {
      return AuthService.register(payload)
    },
    onError: (error) => {
      console.log("error", error)
    },
    onSuccess: () => {
      console.log("usuário cadastrado com sucesso")
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutate(data)
  }

  return {
    onSubmit,
    isPending,
    register,
    handleSubmit,
    errors,
    isSubmitting
  }

}