import { Reset } from 'styled-reset';
import { Outlet } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
