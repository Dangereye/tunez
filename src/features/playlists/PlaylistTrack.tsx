// Components
import PlaylistTrackTitle from './PlaylistTrackTitle';
import PlaylistTrackAlbum from './PlaylistTrackAlbum';
import PlaylistTrackDate from './PlaylistTrackDate';
import PlaylistTrackRuntime from './PlaylistTrackRuntime';

//Interfaces
import { IPlaylistTrackItem } from '../../interfaces/IPlaylistTrackItem';
import PlaylistTrackNumber from './PlaylistTrackNumber';

type PlaylistTrackProps = {
  item: IPlaylistTrackItem;
  index: number;
};

export default function PlaylistTrack({ item, index }: PlaylistTrackProps) {
  return (
    <div className='gap-2 py-2 px-4 lg:px-8 grid grid-cols-1 md:grid-cols-[_minmax(250px,_2fr),_minmax(250px,_2fr),75px] xl:grid-cols-[50px,_minmax(250px,_2fr),_minmax(250px,_2fr),_minmax(150px,_1fr),100px] items-center hover:bg-zinc-100 transition-colors'>
      <PlaylistTrackNumber index={index} />
      <PlaylistTrackTitle item={item} />
      <PlaylistTrackAlbum item={item} />
      <PlaylistTrackDate item={item} />
      <PlaylistTrackRuntime item={item} />
    </div>
  );
}
