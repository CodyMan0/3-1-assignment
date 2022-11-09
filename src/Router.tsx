import Home from 'Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
