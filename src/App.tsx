import { Reset } from 'styled-reset';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import './App.css';

function App() {
  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
