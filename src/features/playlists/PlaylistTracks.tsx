// Interfaces
import { IPlaylistTrackItem } from '../../interfaces/IPlaylistTrackItem';

// Components
import PlaylistTrack from './PlaylistTrack';
import PlaylistTracksHeader from './PlaylistTracksHeader';

type PlaylistTracksProps = {
  items: IPlaylistTrackItem[] | undefined;
};

export default function PlaylistTracks({ items }: PlaylistTracksProps) {
  return (
    <section>
      <PlaylistTracksHeader />
      {items?.map((item, i) => (
        <PlaylistTrack key={item.track.id} item={item} index={i} />
      ))}
    </section>
  );
}
