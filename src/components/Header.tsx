import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  li {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const NavItem = styled.li``;

export const Header = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="/">Popular</Link>
      </NavItem>
      <NavItem>
        <Link to="/coming-soon">Coming Soon</Link>
      </NavItem>
      <NavItem>
        <Link to="/now-playing">Now Playing</Link>
      </NavItem>
      <button>Search</button>
    </Nav>
  );
};
