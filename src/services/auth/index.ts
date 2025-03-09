import { api } from "@/configs/api";
import { Login } from "./login.types";


export const AuthService = {
  login: async ({ email, password }: Login.ILoginRequest): Promise<string> => {
    const { data } = await api.post('/auth/login', { email, password });
    return data;
  },
  logout: async (): Promise<boolean> => {
    const { data } = await api.post('/auth/logout');
    return data;
  },
};
