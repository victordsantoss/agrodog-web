import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { AuthStorage } from '@/storages/authStorage';
import { UserService } from '@/services/user';
import { UserStorage } from '@/storages/userStorage';


interface AuthContextProps {
  persistUser: (token: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const persistUser = async () => {
    const { user } = await UserService.getAuthenticatedUser();
    if (user) {
      UserStorage.setUser(user)
    }
  };

  const verifyAuth = () => {
    const token = AuthStorage.getToken();
    if (token) {
      console.log("token", token)
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ persistUser }}>
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
