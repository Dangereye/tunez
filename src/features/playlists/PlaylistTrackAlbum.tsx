// React router
import { Link } from 'react-router-dom';

// Interfaces
import { IPlaylistTrackItem } from '../../interfaces/IPlaylistTrackItem';

type PlaylistTrackAlbumProps = {
  item: IPlaylistTrackItem;
};

export default function PlaylistTrackAlbum({ item }: PlaylistTrackAlbumProps) {
  return (
    <div className='hidden truncate md:block'>
      <Link
        to={`/album/${item.track.album.id}`}
        className='text-sm hover:underline'
      >
        {item.track.album.name}
      </Link>
    </div>
  );
}
