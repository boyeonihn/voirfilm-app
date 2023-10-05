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

export const Circle = styled(motion.span)`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: pink;
  border-radius: 50%;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Search = styled.span`
  display: flex;
  position: relative;
  justify-content: center;
  svg {
    height: 25px;
  }
`;

export const SearchSVG = styled(motion.svg)`
  color: pink;
  position: absolute;
`;

export const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  background: transparent;
`;
