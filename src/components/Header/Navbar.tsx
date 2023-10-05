import { Link } from 'react-router-dom';
import { Nav, NavItem, Circle } from './styled';
import { UrlType } from '@/types';
import { home, comingSoon, nowPlaying } from '@/const';

type NavProps = {
  currentUrlType: UrlType;
};

export const Navbar = ({ currentUrlType }: NavProps) => {
  return (
    <Nav>
      <NavItem>
        <Link to="/">Popular</Link>
        {currentUrlType === home && <Circle layoutId="circle" />}
      </NavItem>
      <NavItem>
        <Link to="/coming-soon">Coming Soon</Link>
        {currentUrlType === comingSoon && <Circle layoutId="circle" />}
      </NavItem>
      <NavItem>
        <Link to="/now-playing">Now Playing</Link>
        {currentUrlType === nowPlaying && <Circle layoutId="circle" />}
      </NavItem>
    </Nav>
  );
};
