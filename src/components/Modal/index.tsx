import { ReactNode, useEffect, useState } from 'react';
import { ModalCard, ModalDetail, ModalTagline } from './styled';
import { getMovie, IMovieDetail } from '@/types';

interface ModalProps {
  layoutId: string;
  id: string;
  children: ReactNode;
}

export const Modal = ({ layoutId, id, children }: ModalProps) => {
  const [movie, setMovie] = useState<IMovieDetail>();

  useEffect(() => {
    async function fetchAndSetMovie() {
      const data = await getMovie(id);
      setMovie(data);
    }
    fetchAndSetMovie();
  }, [id]);

  console.log('###MOVIE', movie);
  return (
    <ModalCard layoutId={layoutId}>
      {children}
      {movie && (
        <ModalDetail>
          <ModalTagline>{movie.tagline}</ModalTagline>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime} minutes</p>
        </ModalDetail>
      )}
    </ModalCard>
  );
};
