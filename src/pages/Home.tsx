// React
import { useContext } from 'react';

// Hooks
import { useToken } from '../hooks/useToken';

// Context
import { AuthContext } from '../context/AuthContext';

// Components
import ErrorMessage from '../ui/ErrorMessage';
import FeaturedPlaylists from '../features/featured_playlists/FeaturedPlaylists';
import Loader from '../ui/Loader';

export default function Home() {
  const { isLoading } = useToken();
  const { token, error } = useContext(AuthContext);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <FeaturedPlaylists token={token} />
    </>
  );
}
