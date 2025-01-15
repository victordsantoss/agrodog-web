import { IUserResponseDto } from "@/services/user/dto/user.response.dto";

export const UserStorage = {
  key: 'userData',
  setUser: (userData: IUserResponseDto) => {
    localStorage.setItem(UserStorage.key, JSON.stringify(userData));
  },
  getUser: (): IUserResponseDto | null => {
    const userData = localStorage.getItem(UserStorage.key);
    return userData ? JSON.parse(userData) : null;
  },
  removeUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(UserStorage.key);
    }
  },
};
