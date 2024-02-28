// React
import { useContext } from 'react';

// React router
import { Outlet } from 'react-router-dom';

// Context
import { AuthContext } from '../context/AuthContext';

// Hooks
import { useToken } from '../hooks/useToken';

// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';
import Loader from './Loader';
import TokenErrorMessage from './TokenErrorMessage';

export default function AppLayout() {
  const { isLoading } = useToken();
  const { error } = useContext(AuthContext);

  return (
    <div className='grid gap-2  md:grid-cols-[200px_minmax(0,_1fr)] grid-rows-[50px_calc(100vh_-_182px)_100px]'>
      <Sidebar />
      <Header />
      <main className='flex flex-col h-full gap-4 p-4 overflow-scroll overflow-x-hidden bg-zinc-50'>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <TokenErrorMessage message={error} />
        ) : (
          <Outlet />
        )}
      </main>
      <Player />
    </div>
  );
}
