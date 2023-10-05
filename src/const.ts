import {
  getPopular,
  getNowPlaying,
  getComingSoon,
  getMovie,
  UrlType,
} from './types';

export const URL_TYPES: Record<string, UrlType> = {
  home: {
    url: '/',
    api: getPopular,
  },
  comingSoon: {
    url: 'coming-soon',
    api: getComingSoon,
  },
  nowPlaying: {
    url: 'now-playing',
    api: getNowPlaying,
  },
  movie: {
    url: 'movie/:id',
    api: (id?: string) => getMovie(id!),
  },
};

export const { home, comingSoon, nowPlaying, movie } = URL_TYPES;

export const URL_ARRAY = [home.url, comingSoon.url, nowPlaying.url, movie.url];
