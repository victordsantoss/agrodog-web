import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { AuthStorage } from '@/storages/authStorage';
import { UserService } from '@/services/user';
import { UserStorage } from '@/storages/userStorage';
import { IUserResponseDto } from '@/services/user/dto/user.response.dto';

interface AuthContextProps {
  persistUser: (token: string) => void;
  user: IUserResponseDto | undefined
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUserResponseDto | undefined>(undefined)

  const persistUser = async () => {
    const { user } = await UserService.getAuthenticatedUser();
    if (user) {
      UserStorage.setUser(user)
      setUser(user)
    }
  };

  const verifyAuth = () => {
    const token = AuthStorage.getToken();
    const localUser = UserStorage.getUser();
    if (token && localUser) {
      setUser(localUser)
    } else {
      AuthStorage.removeToken()
      UserStorage.removeUser()
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ persistUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
