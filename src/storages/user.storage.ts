import { AuthenticatedUser } from "@/services/user/user.types";

export const UserStorage = {
  key: 'userData',
  setUser: (userData: AuthenticatedUser.response) => {
    localStorage.setItem(UserStorage.key, JSON.stringify(userData));
  },
  getUser: (): AuthenticatedUser.response | null => {
    const userData = localStorage.getItem(UserStorage.key);
    return userData ? JSON.parse(userData) : null;
  },
  removeUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(UserStorage.key);
    }
  },
};
