// React
import { useContext } from 'react';

// React query
import { useQuery } from '@tanstack/react-query';

// Context
import { AuthContext } from '../../context/AuthContext';

// Services
import { getPlaylist } from '../../services/playlist';

// Interfaces
import { IPlaylist } from '../../interfaces/IPlaylist';

export default function usePlaylist(playlistId: string | undefined) {
  const { token, setToken } = useContext(AuthContext);
  const { data, isLoading, error, refetch } = useQuery<IPlaylist>({
    queryKey: ['playlist', playlistId],
    queryFn: () => getPlaylist(token, playlistId),
    enabled: !!token && !!playlistId,
  });

  if (error) {
    setToken('');
    refetch;
  }

  return { data, isLoading, error };
}
