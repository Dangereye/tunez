// React query
import { useQuery } from '@tanstack/react-query';

// Services
import { getFeaturedPlaylists } from '../../services/playlists';

// Interfaces
import { IFeaturedPlaylists } from '../../interfaces/IFeaturedPlaylists';

export default function useFeaturedPlaylists(token: string) {
  const { data, isLoading, error } = useQuery<IFeaturedPlaylists>({
    queryKey: ['featured-playlists', token.substring(0, 3)],
    queryFn: () => getFeaturedPlaylists(token),
  });

  return { data, isLoading, error };
}
