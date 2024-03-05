// Icons
import { LuClock3 } from 'react-icons/lu';

export default function PlaylistTracksHeader() {
  return (
    <header className='gap-2 py-2 px-4 hidden lg:px-8 md:grid md:grid-cols-[minmax(250px,_1fr),_minmax(250px,_1fr),75px]  xl:grid-cols-[50px,_minmax(250px,_2fr),_minmax(250px,_2fr),_minmax(150px,_1fr),100px]'>
      <div className='hidden mb-4 xl:block'>#</div>
      <div className='mb-4'>Title</div>
      <div className='mb-4'>Album</div>
      <div className='hidden mb-4 xl:block'>Date added</div>
      <div className='flex justify-end mb-4'>
        <LuClock3 />
      </div>
    </header>
  );
}
