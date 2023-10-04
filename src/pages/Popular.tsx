import { useQuery } from '@tanstack/react-query';
import { getPopular, IAPIResponse, IMovie } from '../types/api';
import { Loading, Movie, MovieList } from '../components';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popular = () => {
  const [clickedMovie, setClickedMovie] = useState<IMovie | null>(null);
  const mainRef = useRef(null);

  const { isLoading, data } = useQuery({
    queryKey: ['popularData'],
    queryFn: async () => {
      const data: IAPIResponse = await getPopular();
      return data.results;
    },
  });

  console.log(clickedMovie);
  const viewDetail = (movie: IMovie) => {
    setClickedMovie(movie);
  };
  return (
    <Wrapper ref={mainRef}>
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
              transition={{ duration: 0.3 }}
            />
          ))
        )}
      </MovieList>
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
