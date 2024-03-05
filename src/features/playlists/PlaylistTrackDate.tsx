// Interfaces
import { IPlaylistTrackItem } from '../../interfaces/IPlaylistTrackItem';

// Utilities
import { formatDate } from '../../utilities/formatDate';

type PlaylistTrackDateProps = {
  item: IPlaylistTrackItem;
};

export default function PlaylistTrackDate({ item }: PlaylistTrackDateProps) {
  return <div className='hidden xl:block'>{formatDate(item.added_at)}</div>;
}
