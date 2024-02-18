// React router
import { Outlet } from 'react-router-dom';

// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';

export default function AppLayout() {
  return (
    <div className='grid gap-1 grid-cols-1 sm:grid-cols-[100px_minmax(0,_1fr)] md:grid-cols-[200px_minmax(900px,_1fr)] grid-rows-[50px_calc(100vh_-_150px)_100px]'>
      <Sidebar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Player />
    </div>
  );
}
