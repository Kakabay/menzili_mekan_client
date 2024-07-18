import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Works from './pages/Works.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import Project from './pages/Project.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/get-in-touch',
        element: <Contact />,
      },
      {
        path: '/project',
        element: <Project />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
