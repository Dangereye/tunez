// React
import { useContext } from 'react';

// React query
import { useQuery } from '@tanstack/react-query';

// Services
import { getFeaturedPlaylists } from '../../services/playlists';

// Interfaces
import { IFeaturedPlaylists } from '../../interfaces/IFeaturedPlaylists';

// Context
import { AuthContext } from '../../context/AuthContext';

export default function useFeaturedPlaylists() {
  const { token, setToken } = useContext(AuthContext);

  const { data, isLoading, error, refetch } = useQuery<IFeaturedPlaylists>({
    queryKey: ['featured-playlists'],
    queryFn: () => getFeaturedPlaylists(token),
    enabled: !!token,
  });

  if (error) {
    setToken('');
    refetch;
  }

  return { data, isLoading, error };
}
