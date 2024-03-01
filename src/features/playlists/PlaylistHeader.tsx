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
      className={`flex flex-col md:flex-row items-start md:items-end p-4 md:p-8 gap-8 text-white bg-zinc-950 lg:h-[350px]`}
    >
      {playlistCoverImage?.at(0)?.url && (
        <div className='flex w-full justify-center  md:w-[250px]'>
          <img
            className='w-[400px] md:w-[250px]'
            src={playlistCoverImage?.at(0)?.url}
            alt={playlist?.name}
            width='100%'
            height='100%'
          />
        </div>
      )}
      <div className='flex flex-col gap-2 leading-none'>
        <div className='capitalize text-primary'>{playlist?.type}</div>
        <h1 className='mb-1 text-2xl font-black md:text-4xl xl:text-7xl'>
          {playlist?.name}
        </h1>
        <div className='mb-2 italic md:text-xl lg:text-2xl'>
          {playlist?.description}
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          {playlist?.uri && (
            <>
              <Link
                to={playlist?.uri}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
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
