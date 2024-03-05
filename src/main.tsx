// React
import React from 'react';

// React DOM
import ReactDOM from 'react-dom/client';

// React error boundary
import { ErrorBoundary } from 'react-error-boundary';

// CSS
import './index.css';

// Components
import App from './App.tsx';
import ErrorFallback from './ui/ErrorFallback.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
