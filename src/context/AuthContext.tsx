// React
import { ReactNode, createContext, useState } from 'react';

type AuthContextProps = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
