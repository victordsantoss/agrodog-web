import { api } from "@/configs/api";
import { ILoginRequestDto } from "./dto/login.request.dto";


export const AuthService = {
  login: async ({ email, password }: ILoginRequestDto): Promise<string> => {
    const { data } = await api.post('/auth/login', { email, password });
    return data;
  },
};
