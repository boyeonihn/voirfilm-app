import { home, comingSoon, nowPlaying, movie } from '@/const';
import { PathPattern } from 'react-router-dom';
import { pathType } from '@/types';
import { useMatch } from 'react-router-dom';

export const getUseMatch = (
  fn: typeof useMatch,
  urlArray: PathPattern[] | string[]
) => {
  const array = urlArray.map((url) => fn(url));
  return array;
};

export const isUrlMovie = (url: string) => {
  return url === 'movie/:id';
};
export const getCurrentUrlType = (url: pathType | undefined) => {
  const pathname = url?.pathname.slice(1);

  if (pathname === home.url) {
    return home;
  } else if (pathname === nowPlaying.url) {
    return nowPlaying;
  } else if (pathname === comingSoon.url) {
    return comingSoon;
  } else if (pathname?.includes('movie')) {
    return movie;
  } else {
    return home;
  }
};
