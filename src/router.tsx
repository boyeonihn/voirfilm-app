import { createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/Root';
import { Home, Search, Tv } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'tv',
        element: <Tv />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);
