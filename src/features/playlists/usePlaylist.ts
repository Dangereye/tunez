// React
import { useContext } from 'react';

// React query
import { useQuery, useQueryClient } from '@tanstack/react-query';

// Context
import { AuthContext } from '../../context/AuthContext';

// Services
import { getPlaylist } from '../../services/playlists';

// Interfaces
import { IPlaylist } from '../../interfaces/IPlaylist';
import { IError } from '../../interfaces/IError';

export default function usePlaylist(playlistId: string | undefined) {
  const { token, setToken } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery<IPlaylist, IError>({
    queryKey: ['playlist', playlistId],
    queryFn: () => getPlaylist(token, playlistId),
    enabled: !!token && !!playlistId,
  });

  if (error && error.status === 401) {
    setToken('');
    queryClient.invalidateQueries({ queryKey: ['token'] });
    refetch;
  }

  return { data, isLoading, error };
}
