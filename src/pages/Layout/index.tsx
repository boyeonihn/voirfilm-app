import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { Loading, Movie, MovieList } from '@/components';
import { URL_ARRAY } from '@/const';
import { IAPIResponse, IMovie } from '@/types';
import { Wrapper, Overlay } from './styled';
import { getUseMatch, getCurrentUrlType } from '@/utils';

export const Layout = () => {
  const navigate = useNavigate();
  const [clickedMovie, setClickedMovie] = useState<IMovie | null>(null);
  const mainRef = useRef(null);
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: [`${currentUrlType.url}Data`],
    queryFn: async () => {
      const data: IAPIResponse = await currentUrlType.api();
      return data.results;
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
