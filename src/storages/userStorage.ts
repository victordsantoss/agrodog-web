import { IUserResponseDto } from "@/services/user/dto/user.response.dto";

export const UserStorage = {
  setUser: (userData: IUserResponseDto) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  },
  getUser: (): IUserResponseDto | null => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  },
};
