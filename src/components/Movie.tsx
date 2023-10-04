import { IMovie, makeImagePath } from '../api';
import styled from 'styled-components';
import { easeIn, motion } from 'framer-motion';

interface Props {
  movie: IMovie;
  viewDetail: () => void;
}

const MovieUnit = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 300px;
    width: 200px;
    border-radius: 15px;
  }

  h2 {
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Movie = ({ movie, viewDetail }: Props) => {
  console.log('### movie', movie);

  const { title, poster_path } = movie;
  const image = makeImagePath(poster_path);
  return (
    <MovieUnit
      onClick={viewDetail}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.2 }}
    >
      <img src={image} />
      <h2>Movie! {title}</h2>
    </MovieUnit>
  );
};
