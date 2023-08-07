import { NavItem, NavItemLink, NavList } from "./Navigation.styled";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
