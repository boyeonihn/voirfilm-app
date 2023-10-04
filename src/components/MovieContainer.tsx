import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const MovieContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  grid-auto-flow: row;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
`;

export const MovieList = ({ children }: PropsWithChildren) => {
  return <MovieContainer>{children}</MovieContainer>;
};
