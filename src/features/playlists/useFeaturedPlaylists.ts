// React
import { useContext } from 'react';

// React query
import { useQuery, useQueryClient } from '@tanstack/react-query';

// Context
import { AuthContext } from '../../context/AuthContext';

// Services
import { getFeaturedPlaylists } from '../../services/playlists';

// Interfaces
import { IFeaturedPlaylists } from '../../interfaces/IFeaturedPlaylists';
import { IError } from '../../interfaces/IError';

export default function useFeaturedPlaylists() {
  const { token, setToken } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery<
    IFeaturedPlaylists,
    IError
  >({
    queryKey: ['featured-playlists'],
    queryFn: () => getFeaturedPlaylists(token),
    enabled: !!token,
  });

  if (error && error.status === 401) {
    setToken('');
    queryClient.invalidateQueries({ queryKey: ['token'] });
    refetch;
  }

  return { data, isLoading, error };
}
