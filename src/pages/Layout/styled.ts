import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
