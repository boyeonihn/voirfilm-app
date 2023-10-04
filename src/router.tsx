import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Search, Movie, Layout } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Layout />,
      },
      {
        path: 'now-playing',
        element: <Layout />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'coming-soon',
        element: <Layout />,
      },
      {
        path: 'movie/:id',
        element: <Movie />,
      },
    ],
  },
]);
