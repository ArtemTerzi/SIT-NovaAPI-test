import {
  HeaderContainer,
  NavItem,
  NavItemLink,
  NavList,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavList>
          <NavItem>
            <NavItemLink to="/">Home</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/tracking">Tracking</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/departments">Branches</NavItemLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
