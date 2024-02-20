// React router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// React query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Context
import { AuthContextProvider } from './context/AuthContext';

// Pages
import Home from './pages/Home';

// Components
import AppLayout from './ui/AppLayout';

export default function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
