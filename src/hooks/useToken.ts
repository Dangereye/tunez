// React
import { useContext, useEffect } from 'react';

// React query
import { useQuery } from '@tanstack/react-query';

// Context
import { AuthContext } from '../context/AuthContext';

// Services
import { getToken } from '../services/token';

// Interfaces
import { ITokenError, ITokenSuccess } from '../interfaces/IToken';

export function useToken() {
  const { token, setToken, error, setError } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery<ITokenSuccess | ITokenError>({
    queryKey: ['token'],
    queryFn: getToken,
    // 55 mins
    staleTime: 3300000,
  });

  useEffect(() => {
    if (token) return;
    if (!data || isLoading) return;
    if (data.statusText === 'error') {
      setToken('');
      setError(`Status: ${data.status} - ${data.error_description}.`);
    } else {
      setToken(data.access_token);
      setError('');
    }
  }, [data, isLoading, token, error, setToken, setError]);

  return { isLoading, refetch };
}
