import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IMovie, makeImagePath } from '@/types/api';

interface Props {
  movie: IMovie;
  viewDetail: () => void;
  layoutId: string;
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

const movieVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    y: -50,
    transition: {
      delay: 0.3,
      duaration: 0.1,
      type: 'tween',
    },
  },
};

export const Movie = ({ movie, viewDetail, layoutId }: Props) => {
  const { title, poster_path } = movie;
  const image = makeImagePath(poster_path);
  return (
    <MovieUnit
      variants={movieVariants}
      onClick={viewDetail}
      initial="normal"
      whileHover="hover"
      transition={{ type: 'tween' }}
      layoutId={layoutId}
    >
      <img src={image} />
      <h2>{title}</h2>
    </MovieUnit>
  );
};
