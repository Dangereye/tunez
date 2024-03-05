// React router
import { Link } from 'react-router-dom';

//Interfaces
import { IPlaylistTrackItem } from '../../interfaces/IPlaylistTrackItem';

// Utilities
import { formatDate } from '../../utilities/formatDate';
import { formatRuntime } from '../../utilities/formatRuntime';

type PlaylistTrackProps = {
  item: IPlaylistTrackItem;
  index: number;
};

export default function PlaylistTrack({ item, index }: PlaylistTrackProps) {
  return (
    <div
      key={item.track.id}
      className='gap-2 py-2 px-4 lg:px-8 grid grid-cols-1 md:grid-cols-[_minmax(250px,_2fr),_minmax(250px,_2fr),75px] xl:grid-cols-[50px,_minmax(250px,_2fr),_minmax(250px,_2fr),_minmax(150px,_1fr),100px] items-center hover:bg-zinc-100 transition-colors'
    >
      <div className='hidden xl:block'>{`${index + 1}`}</div>
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
      <div className='hidden md:block'>
        <Link
          to={`/album/${item.track.album.id}`}
          className='text-sm hover:underline'
        >
          {item.track.album.name}
        </Link>
      </div>
      <div className='hidden xl:block'>{formatDate(item.added_at)}</div>
      <div className='hidden text-right md:block'>
        {formatRuntime(item.track.duration_ms)}
      </div>
    </div>
  );
}
