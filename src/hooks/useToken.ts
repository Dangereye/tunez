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

  const { data, isLoading } = useQuery<ITokenSuccess | ITokenError>({
    queryKey: ['token'],
    queryFn: getToken,
    staleTime: 3600000,
  });

  useEffect(() => {
    setError('');
    if (!data) return;
    if (data.statusText === 'error') {
      setToken('');
      setError(`Status: ${data.status} - ${data.error_description}.`);
    } else {
      if (token) return;
      setToken(data.access_token);
    }
  }, [data, token, error, setToken, setError]);

  return { isLoading };
}
