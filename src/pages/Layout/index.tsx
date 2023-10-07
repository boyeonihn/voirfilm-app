import { useQuery } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { Loading, Movie, MovieList, Modal } from '@/components';
import { URL_ARRAY, URL_TYPES } from '@/const';
import { IAPIResponse, IMovie, makeBgPath } from '@/types';
import {
  Wrapper,
  Overlay,
  ModalCover,
  ModalTitle,
  ModalOverview,
  ModalInfo,
  CloseButton,
} from './styled';
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

  const closeModal = () => {
    navigate(-1);
  };
  const viewDetail = (movie: IMovie) => {
    navigate(`/movie/${movie.id}`);
  };

  const clickedMovie = id && data?.find((movie) => String(movie.id) === id);
  console.log(clickedMovie);
  return (
    <Wrapper>
      <AnimatePresence>
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
        {isUrlMovie(url) && (
          <>
            <Overlay onClick={closeModal} animate={{ opacity: 1 }} />
            <Modal layoutId={String(id)} id={id}>
              {clickedMovie && (
                <>
                  <ModalCover src={makeBgPath(clickedMovie.backdrop_path)} />
                  <CloseButton onClick={closeModal}>X</CloseButton>
                  <ModalInfo>
                    <ModalTitle>{clickedMovie.title}</ModalTitle>
                    <ModalOverview>{clickedMovie.overview}</ModalOverview>
                  </ModalInfo>
                </>
              )}
            </Modal>
          </>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
