// React router
import { useParams } from 'react-router-dom';

// Hooks
import usePlaylist from '../features/playlists/usePlaylist';
import usePlaylistCoverImage from '../features/playlists/usePlaylistCoverImage';

// Components
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import PlaylistHeader from '../features/playlists/PlaylistHeader';
import PlaylistTracks from '../features/playlists/PlaylistTracks';

export default function Playlist() {
  const { playlistId } = useParams();
  const {
    data: playlist,
    isLoading: playlistIsLoading,
    error: playlistError,
  } = usePlaylist(playlistId);

  const { data: playlistCoverImage, isLoading: playlistCoverImageIsLoading } =
    usePlaylistCoverImage(playlistId);

  if (playlistIsLoading || playlistCoverImageIsLoading) return <Loader />;

  if (playlistError) return <ErrorMessage message={playlistError.message} />;

  return (
    <>
      <PlaylistHeader
        playlist={playlist}
        playlistCoverImage={playlistCoverImage}
      />
      <PlaylistTracks items={playlist?.tracks.items} />
    </>
  );
}
