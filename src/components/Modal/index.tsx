import { ReactNode, useEffect, useState } from 'react';
import {
  ModalCard,
  ModalDetail,
  ModalTagline,
  List,
  Item,
  MovieLink,
  ModalP,
} from './styled';
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
          <ModalP>Release date: {movie.release_date}</ModalP>
          <ModalP>Runtime: {movie.runtime} minutes</ModalP>
          <ModalP>Average Rating: {movie.vote_average.toFixed(1)}</ModalP>
          <ModalP>
            Homepage:{' '}
            <MovieLink href={movie.homepage} target="_blank">
              {movie.homepage}
            </MovieLink>
          </ModalP>
          <ModalP>
            Genres:
            <List>
              {movie.genres.map((genre) => (
                <Item key={genre.id}>{genre.name}</Item>
              ))}
            </List>
          </ModalP>
          <ModalP>
            {' '}
            Available Languages:{' '}
            <List>
              {movie.spoken_languages.map((language) => (
                <Item key={language.iso_639_1}>{language.name}</Item>
              ))}
            </List>
          </ModalP>
        </ModalDetail>
      )}
    </ModalCard>
  );
};
