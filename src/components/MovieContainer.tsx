import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const MovieContainer = styled(motion.main)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px 20px;
  grid-auto-flow: row;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
`;

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const MovieList = ({ children }: PropsWithChildren) => {
  return (
    <MovieContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </MovieContainer>
  );
};
