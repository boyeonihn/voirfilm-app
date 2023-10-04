import { home, comingSoon, nowPlaying } from '@/const';
import { PathPattern } from 'react-router-dom';
import { pathType } from '@/types';
import { useMatch } from 'react-router-dom';

export const getCurrentUrlType = (
  homeMatch: pathType,
  comingSoonMatch: pathType,
  nowPlayingMatch: pathType
) => {
  const currentUrlType = homeMatch
    ? home
    : comingSoonMatch
    ? comingSoon
    : nowPlaying;

  return currentUrlType;
};

export const getUseMatch = (
  fn: typeof useMatch,
  urlArray: PathPattern[] | string[]
) => {
  const array = urlArray.map((url) => fn(url));
  return array;
};
