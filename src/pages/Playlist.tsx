// React router
import { Link, useParams } from 'react-router-dom';

// Hooks
import usePlaylist from '../features/playlists/usePlaylist';
import usePlaylistCoverImage from '../features/playlists/usePlaylistCoverImage';

// Components
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import SpotifyIcon from '../ui/SpotifyIcon';

// Utilities
import { formatNumber } from '../utilities/formatNumber';
import { formatRuntime } from '../utilities/formatRuntime';

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

  const primaryColor = playlist?.primary_color || '#ffffff';

  return (
    <>
      <header
        style={{ color: primaryColor }}
        className={`flex items-end p-8 gap-8 bg-zinc-950 h-[350px]`}
      >
        {playlistCoverImage?.at(0)?.url && (
          <div>
            <img
              src={playlistCoverImage?.at(0)?.url}
              alt={playlist?.name}
              width='250px'
              height='250px'
            />
          </div>
        )}
        <div className='flex flex-col gap-2 leading-none'>
          <div className='capitalize'>{playlist?.type}</div>
          <h1 className='mb-4 font-black text-7xl'>{playlist?.name}</h1>
          <div className='mb-2 text-2xl italic'>{playlist?.description}</div>
          <div className='flex items-center gap-2'>
            {playlist?.uri && (
              <>
                <Link
                  to={playlist?.uri}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1'
                >
                  <div className='w-[21px] h[21px]'>
                    <SpotifyIcon />
                  </div>
                  <div>Spotify</div>
                </Link>
                <div>∘</div>
              </>
            )}
            {playlist?.followers && (
              <>
                <div>
                  Followers:{' '}
                  <span className='font-medium'>
                    {formatNumber(playlist?.followers?.total)}
                  </span>
                </div>
                <div>∘</div>
              </>
            )}
            {playlist?.tracks.total && (
              <>
                <div>
                  Songs:{' '}
                  <span className='font-medium'>{playlist?.tracks?.total}</span>
                </div>
                <div>∘</div>
              </>
            )}
            <div>
              Runtime:{' '}
              <span className='font-medium'>
                {formatRuntime(
                  playlist?.tracks?.items?.reduce(
                    (acc, curr) => acc + curr?.track?.duration_ms || 0,
                    0
                  )
                )}
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
