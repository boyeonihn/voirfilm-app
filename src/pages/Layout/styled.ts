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

export const ModalCover = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 350px;
`;

export const ModalInfo = styled.div`
  position: relative;
  top: -115px;
  padding: 20px;
`;

export const ModalTitle = styled.h2`
  text-align: left;
  font-size: 3rem;
  font-family: 'Berkshire Swash', cursive;
  font-weight: bold;
  color: white;
  text-shadow:
    3px 3px 0 #131314,
    -1px -1px 0 #131314,
    1px -1px 0 #131314,
    -1px 1px 0 #131314,
    1px 1px 0 #131314;
`;

export const ModalOverview = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding-top: 20px;
`;

export const CloseButton = styled.span`
  display: inline-block;
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50%;
  background-color: rgba(255, 192, 203, 0.8);
  position: relative;
  top: -340px;
  left: 450px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
