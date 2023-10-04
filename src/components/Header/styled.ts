import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  padding-top: 200px;
`;

export const Logo = styled(motion.h1)`
  font-family: 'Pacifico', cursive;
  font-size: 5rem;
`;
export const Nav = styled.nav`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  li {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const NavItem = styled.li`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  position: relative;
`;

export const Circle = styled.span`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;