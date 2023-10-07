import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalCard = styled(motion.section)`
  position: fixed;
  width: 500px;
  height: 750px;
  background-color: pink;
  top: 50px; /* specify units for numerical values */
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
`;

export const ModalDetail = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  position: relative;
  top: -115px;
  padding: 0px 20px;
`;

export const ModalTagline = styled.h3`
  font-size: 1.75rem;
  font-family: 'Pacifico', cursive;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin: 10px 10px 10px 0px;
  background: #aaf0d1;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background: #47eda4;
  }
`;

export const MovieLink = styled.a`
  font-style: italic;

  &:hover {
    font-weight: bold;
  }
`;

export const ModalP = styled.p`
  padding-top: 3px;
`;
