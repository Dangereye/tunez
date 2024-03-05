// React router
import { Link } from 'react-router-dom';

// Interfaces
import { IPlaylistTrackItem } from '../../interfaces/IPlaylistTrackItem';

type PlaylistTrackTitleProps = {
  item: IPlaylistTrackItem;
};

export default function PlaylistTrackTitle({ item }: PlaylistTrackTitleProps) {
  return (
    <div className='flex gap-2'>
      <div className='min-w-[50px] min-h-[50px]'>
        <img
          src={item.track.album.images.at(0)?.url}
          alt={item.track.name}
          width='50px'
          height='50px'
        />
      </div>
      <div className='truncate'>
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
              className='text-sm truncate hover:underline'
            >
              {artist.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
