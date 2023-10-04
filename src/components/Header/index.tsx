import { Link, useMatch } from 'react-router-dom';
import { Wrapper, Logo, Nav, NavItem, Circle } from './styled';
import { home, comingSoon, nowPlaying, URL_ARRAY } from '@/const';
import { getCurrentUrlType, getUseMatch } from '@/utils';

const logoVariants = {
  initial: {
    color: 'black',
    scale: 1,
  },
  active: {
    color: 'pink',
    scale: [1, 1.5, 1.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const Header = () => {
  const [homeMatch, comingSoonMatch, nowPlayingMatch] = getUseMatch(
    useMatch,
    URL_ARRAY
  );
  const currentUrlType = getCurrentUrlType(
    homeMatch,
    comingSoonMatch,
    nowPlayingMatch
  );

  return (
    <Wrapper>
      <Logo variants={logoVariants} initial="initial" whileHover="active">
        films collection
      </Logo>
      <Nav>
        <NavItem>
          <Link to="/">Popular</Link>
          {currentUrlType === home && <Circle />}
        </NavItem>
        <NavItem>
          <Link to="/coming-soon">Coming Soon</Link>
          {currentUrlType === comingSoon && <Circle />}
        </NavItem>
        <NavItem>
          <Link to="/now-playing">Now Playing</Link>
          {currentUrlType === nowPlaying && <Circle />}
        </NavItem>
        <button>Search</button>
      </Nav>
    </Wrapper>
  );
};
