import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalCard = styled(motion.section)`
  position: fixed;
  width: 500px;
  height: 80vh;
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
  padding: 20px;
`;

export const ModalTagline = styled.h3`
  font-size: 1.75rem;
  font-family: 'Pacifico', cursive;
  margin-bottom: 10px;
`;
