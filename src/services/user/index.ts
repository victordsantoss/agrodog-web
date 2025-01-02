import { api } from "@/configs/api";


export const UserService = {
  getAuthenticatedUser: async () => {
    const { data } = await api.get('/user');
    return data;
  },
};
