export const AuthStorage = {
  setToken: (token: string) => {
    localStorage.setItem('authToken', token);
  },
  getToken: (): string | null => {
    return localStorage.getItem('authToken');
  },
};
