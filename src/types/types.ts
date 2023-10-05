import { PathMatch } from 'react-router-dom';

export type UrlType = {
  url: string;
  api: (id?: string) => Promise<any>;
};

export type pathType = PathMatch<string> | null;
