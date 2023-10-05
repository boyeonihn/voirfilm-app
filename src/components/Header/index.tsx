import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { URL_ARRAY } from '@/const';
import { getCurrentUrlType, getUseMatch } from '@/utils';
import { Wrapper } from './styled';
import { Navbar } from './Navbar';
import { LogoComp } from './Logo';
import { Searchbar } from './Searchbar';

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [homeMatch, comingSoonMatch, nowPlayingMatch] = getUseMatch(
    useMatch,
    URL_ARRAY
  );
  const currentUrlType = getCurrentUrlType(
    homeMatch,
    comingSoonMatch,
    nowPlayingMatch
  );

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <LogoComp />
      <Navbar currentUrlType={currentUrlType} />
      <Searchbar toggleSearch={toggleSearch} searchOpen={searchOpen} />
    </Wrapper>
  );
};
