// React query
import { useQuery } from '@tanstack/react-query';

// Services
import { getArtist } from '../../services/artists';

// Interfaces
import { IArtist } from '../../interfaces/IArtist';

export function useArtist(token: string, artistId: string) {
  const {
    data: artist,
    isLoading: artistIsLoading,
    error: artistError,
  } = useQuery<IArtist>({
    queryKey: ['artist'],
    queryFn: () => getArtist(token, artistId),
  });

  return { artist, artistIsLoading, artistError };
}
