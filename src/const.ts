import { getPopular, getNowPlaying, getComingSoon, UrlType } from './types';

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
};

export const { home, comingSoon, nowPlaying } = URL_TYPES;

export const URL_ARRAY = [home.url, comingSoon.url, nowPlaying.url];
