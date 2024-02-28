// React router
import { useParams } from 'react-router-dom';

// Hooks
import usePlaylist from '../features/playlists/usePlaylist';

// Components
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';

// Utilities
import { formatNumber } from '../utilities/formatNumber';
import { formatRuntime } from '../utilities/formatRuntime';

export default function Playlist() {
  const { playlistId } = useParams();
  const { data, isLoading, error } = usePlaylist(playlistId);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <header
        style={{ backgroundImage: `url(${data?.images[0].url})` }}
        className='flex w-full p-4 text-white bg-center bg-cover h-1/3'
      >
        <div className='flex flex-col self-end gap-2 leading-none'>
          <div className='capitalize'>{data?.type}</div>
          <h1 className='mb-6 text-8xl'>{data?.name}</h1>
          <div>{data?.description}</div>
          <div className='flex gap-2'>
            <div>
              Followers:{' '}
              <span className='font-medium'>
                {formatNumber(data?.followers.total)}
              </span>
            </div>
            <div>∘</div>
            <div>
              Songs: <span className='font-medium'>{data?.tracks.total}</span>
            </div>
            <div>∘</div>
            <div>
              Runtime:{' '}
              <span className='font-medium'>
                {formatRuntime(
                  data?.tracks.items.reduce(
                    (acc, curr) => acc + curr.track.duration_ms,
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
