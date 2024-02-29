// React router
import { Link, useParams } from 'react-router-dom';

// Hooks
import usePlaylist from '../features/playlists/usePlaylist';

// Components
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import SpotifyIcon from '../ui/SpotifyIcon';

// Utilities
import { formatNumber } from '../utilities/formatNumber';
import { formatRuntime } from '../utilities/formatRuntime';

export default function Playlist() {
  const { playlistId } = useParams();
  const { data, isLoading, error } = usePlaylist(playlistId);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  const primaryColor = data?.primary_color || '#ffffff';

  return (
    <>
      <header
        style={{ color: primaryColor }}
        className={`flex items-end p-8 gap-8 bg-zinc-950 h-[350px]`}
      >
        <div className='flex flex-col gap-2 leading-none'>
          <div className='capitalize'>{data?.type}</div>
          <h1 className='mb-4 text-7xl'>{data?.name}</h1>
          <div className='mb-2 text-2xl italic'>{data?.description}</div>
          <div className='flex items-center gap-2'>
            {data?.uri && (
              <>
                <Link
                  to={data?.uri}
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
            {data?.followers && (
              <>
                <div>
                  Followers:{' '}
                  <span className='font-medium'>
                    {formatNumber(data?.followers?.total)}
                  </span>
                </div>
                <div>∘</div>
              </>
            )}
            {data?.tracks.total && (
              <>
                <div>
                  Songs:{' '}
                  <span className='font-medium'>{data?.tracks?.total}</span>
                </div>
                <div>∘</div>
              </>
            )}
            <div>
              Runtime:{' '}
              <span className='font-medium'>
                {formatRuntime(
                  data?.tracks?.items?.reduce(
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
