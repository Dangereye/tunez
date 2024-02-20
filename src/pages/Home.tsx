// React
import { useContext } from 'react';

// Hooks
import { useToken } from '../hooks/useToken';

// Context
import { AuthContext } from '../context/AuthContext';
import { useArtist } from '../features/artists/useArtist';

export default function Home() {
  useToken();
  const { token } = useContext(AuthContext);
  const { artist, artistIsLoading, artistError } = useArtist(
    token,
    '0TnOYISbd1XYRBk9myaseg'
  );

  return (
    <div>
      <h1>Home</h1>
      {artistIsLoading
        ? 'loading'
        : artistError
        ? artistError.message
        : artist?.name}
    </div>
  );
}
