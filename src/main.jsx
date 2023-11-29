import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct import
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRouter from './Route/Router.jsx';

const queryClient = new QueryClient();

// Use createRoot from react-dom/client
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* Use RouterProvider directly */}
        <RouterProvider router={AppRouter} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
