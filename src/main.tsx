import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { myTheme } from './theme.ts';
import './index.css';
import { router } from './router.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={myTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);
