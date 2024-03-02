// React router
import { Link, useParams } from 'react-router-dom';

// Hooks
import usePlaylist from '../features/playlists/usePlaylist';
import usePlaylistCoverImage from '../features/playlists/usePlaylistCoverImage';

// Components
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import PlaylistHeader from '../features/playlists/PlaylistHeader';

// Icons
import { LuClock3 } from 'react-icons/lu';

// Utilities
import { formatRuntime } from '../utilities/formatRuntime';
import { formatDate } from '../utilities/formatDate';

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
      <section className='flex flex-col'>
        <header className='gap-2 py-2 px-4 lg:px-8 grid lg:grid-cols-[50px,_minmax(250px,_2fr),_minmax(250px,_2fr),_minmax(150px,_1fr),100px]'>
          <div className='mb-4'>#</div>
          <div className='mb-4'>Title</div>
          <div className='mb-4'>Album</div>
          <div className='mb-4'>Date added</div>
          <div className='mb-4'>
            <LuClock3 />
          </div>
        </header>

        {playlist?.tracks.items.map((item, i) => (
          <div
            key={item.track.id}
            className='gap-2 py-2 px-4 lg:px-8 grid lg:grid-cols-[50px,_minmax(250px,_2fr),_minmax(250px,_2fr),_minmax(150px,_1fr),100px] hover:bg-zinc-100 items-center'
          >
            <div>{`${i + 1}`}</div>
            <div className='flex gap-2'>
              <div className='w-[50px] h-[50px]'>
                <img src={item.track.album.images.at(0)?.url} />
              </div>
              <div>
                <Link
                  to={`/track/${item.track.id}`}
                  className='font-bold hover:underline'
                >
                  {item?.track.name}
                </Link>
                <div className='flex gap-2'>
                  {item?.track.album.artists.map((artist) => (
                    <Link
                      key={`${item.track.id}-${artist.id}`}
                      to={`/artist/${artist.id}`}
                      className='text-sm hover:underline'
                    >
                      {artist.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Link
                to={`/album/${item.track.album.id}`}
                className='text-sm hover:underline'
              >
                {item.track.album.name}
              </Link>
            </div>
            <div>{formatDate(item.added_at)}</div>
            <div>{formatRuntime(item.track.duration_ms)}</div>
          </div>
        ))}
      </section>
    </>
  );
}
