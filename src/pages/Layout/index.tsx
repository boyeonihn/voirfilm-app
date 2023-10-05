import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { Loading, Movie, MovieList } from '@/components';
import { URL_ARRAY } from '@/const';
import { IAPIResponse, IMovie, getPopular } from '@/types';
import { Wrapper, Overlay } from './styled';
import { getUseMatch, getCurrentUrlType, isUrlMovie } from '@/utils';
import { useRef } from 'react';

export const Layout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const prevLocation = useRef('/');

  const array = getUseMatch(useMatch, URL_ARRAY).find((it) => it !== null);
  const { url, api } = getCurrentUrlType(array);

  if (!isUrlMovie(url)) {
    prevLocation.current = url;
  }

  const prevPath = Object.values(URL_TYPES).find(
    (it) => it.url === prevLocation.current
  );

  const { isLoading, data } = useQuery({
    queryKey: [`${isUrlMovie(url) ? 'current-movie' : url}-Data`],
    queryFn: async () => {
      if (isUrlMovie(url)) {
        const data: IAPIResponse = await prevPath?.api();
        return data.results;
      } else {
        const data: IAPIResponse = await api();
        return data.results;
      }
    },
  });

  const viewDetail = (movie: IMovie) => {
    setClickedMovie(movie);
    navigate(`/movie/${movie.id}`);
  };
  return (
    <Wrapper ref={mainRef}>
      <AnimatePresence onExitComplete={toggleLeaving}>
        <MovieList>
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((movie) => (
              <Movie
                key={movie.id}
                movie={movie}
                layoutId={String(movie.id)}
                viewDetail={() => viewDetail(movie)}
              />
            ))
          )}
        </MovieList>
      </AnimatePresence>
      <AnimatePresence>
        {clickedMovie && (
          <Overlay
            onClick={() => setClickedMovie(null)}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            <Movie
              layoutId={String(clickedMovie.id)}
              movie={clickedMovie}
              viewDetail={() => console.log('hi')}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
