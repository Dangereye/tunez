// React router
import { Outlet } from 'react-router-dom';

// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';

export default function AppLayout() {
  return (
    <div className='grid gap-2  md:grid-cols-[200px_minmax(0,_1fr)] grid-rows-[50px_calc(100vh_-_182px)_100px]'>
      <Sidebar />
      <Header />
      <main className='flex flex-col h-full gap-4 p-4 overflow-scroll overflow-x-hidden bg-zinc-50'>
        <Outlet />
      </main>
      <Player />
    </div>
  );
}
