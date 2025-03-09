import { api } from "@/configs/api";
import { AuthenticatedUser } from "./user.types";

export const UserService = {
  getAuthenticatedUser: async (): Promise<AuthenticatedUser.response> => {
    const { data } = await api.get('/user');
    return data;
  },
};
