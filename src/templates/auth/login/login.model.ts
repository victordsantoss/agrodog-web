import { useAlert } from "@/contexts/alert.context";
import { useAuth } from "@/contexts/auth.context";
import { AuthService } from "@/services/auth";
import { AuthStorage } from "@/storages/auth.storage";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { LoginFormValues } from "./components/form/form.schema";


export const useLoginModel = () => {
  const { push } = useRouter();
  const { showAlert } = useAlert();
  const { persistUser } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: (value: { email: string; password: string }) =>
      AuthService.login(value),
    onError: (error) => {
      if (isAxiosError(error)) showAlert(error.response?.data.message, 'error');
    },
    onSuccess: async (token: string) => {
      AuthStorage.setToken(token);
      persistUser(token);
      showAlert('Usuário autenticado com sucesso!', 'success');
      push('home');
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    mutate(data)
  }

  return {
    onSubmit,
    isPending,
    push
  }


}