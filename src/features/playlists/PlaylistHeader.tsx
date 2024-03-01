// React router
import { Link } from 'react-router-dom';

// Components
import SpotifyIcon from '../../ui/SpotifyIcon';

// Interfaces
import { IPlaylist } from '../../interfaces/IPlaylist';
import { IPlaylistCoverImage } from '../../interfaces/IPlaylistCoverImage';

// Utilities
import { formatNumber } from '../../utilities/formatNumber';
import { formatRuntime } from '../../utilities/formatRuntime';

type PlaylistHeaderProps = {
  playlist: IPlaylist | undefined;
  playlistCoverImage: IPlaylistCoverImage[] | undefined;
};

export default function PlaylistHeader({
  playlist,
  playlistCoverImage,
}: PlaylistHeaderProps) {
  return (
    <header
      className={`flex items-end p-8 gap-8 text-white bg-zinc-950 h-[350px]`}
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
        <div className='capitalize text-primary'>{playlist?.type}</div>
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
                <span className='text-primary'>
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
                <span className='text-primary'>{playlist?.tracks?.total}</span>
              </div>
              <div>∘</div>
            </>
          )}
          {playlist?.tracks?.items && (
            <div>
              Runtime:{' '}
              <span className='text-primary'>
                {formatRuntime(
                  playlist?.tracks?.items?.reduce(
                    (acc, curr) => acc + curr?.track?.duration_ms || 0,
                    0
                  )
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
