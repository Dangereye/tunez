// React
import { useContext, useEffect } from 'react';

// React query
import { useQuery } from '@tanstack/react-query';

// Context
import { AuthContext } from '../context/AuthContext';

// Services
import { getToken } from '../services/tokenApi';

// Interfaces
import { IToken } from '../interfaces/IToken';

export function useToken() {
  const { setToken } = useContext(AuthContext);

  const { data } = useQuery<IToken>({
    queryKey: ['token'],
    queryFn: getToken,
    staleTime: 3600000,
  });

  useEffect(() => {
    if (!data) return;
    setToken(data?.access_token);
  }, [data, setToken]);
}
