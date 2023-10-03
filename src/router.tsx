import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Popular, Search, ComingSoon, NowPlaying } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Popular />,
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
      },
    ],
  },
]);
