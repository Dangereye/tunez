// Interfaces
import { IPlaylistTrackItem } from '../../interfaces/IPlaylistTrackItem';

// Utilities
import { formatRuntime } from '../../utilities/formatRuntime';

type PlaylistTrackRuntimeProps = {
  item: IPlaylistTrackItem;
};

export default function PlaylistTrackRuntime({
  item,
}: PlaylistTrackRuntimeProps) {
  return (
    <div className='hidden text-right md:block'>
      {formatRuntime(item.track.duration_ms)}
    </div>
  );
}
