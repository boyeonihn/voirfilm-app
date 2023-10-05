import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
`;

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
