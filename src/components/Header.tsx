import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Col = styled.div``;
const Logo = styled.svg`
  margin-right: 50px;
`;

const Links = styled.ul`
  display: flex;
  li {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const LinkItem = styled.li``;

export const Header = () => {
  return (
    <Nav>
      <Col>
        <Logo />
        <Links>
          <LinkItem>Popular</LinkItem>
          <LinkItem>Coming Soon</LinkItem>
          <LinkItem>Now Playing</LinkItem>
        </Links>
      </Col>
      <Col>
        <button>Search</button>
      </Col>
    </Nav>
  );
};
