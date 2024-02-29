// React
import { useContext } from 'react';

// React query
import { useQuery, useQueryClient } from '@tanstack/react-query';

// Context
import { AuthContext } from '../../context/AuthContext';

// Services
import { getPlaylistCoverImage } from '../../services/playlists';

// Interfaces
import { IError } from '../../interfaces/IError';
import { IPlaylistCoverImage } from '../../interfaces/IPlaylistCoverImage';

export default function usePlaylistCoverImage(playlistId: string | undefined) {
  const { token, setToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const { data, isLoading, error, refetch } = useQuery<
    IPlaylistCoverImage[],
    IError
  >({
    queryKey: ['playlist-cover-image', playlistId],
    queryFn: () => getPlaylistCoverImage(token, playlistId),
    enabled: !!token && !!playlistId,
  });

  if (error && error.status === 401) {
    setToken('');
    queryClient.invalidateQueries({ queryKey: ['token'] });
    refetch;
  }
  return { data, isLoading, error };
}
