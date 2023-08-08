import Navigation from "components/Navigation";
import { HeaderContainer, NavigationWrapper } from "./Header.styled";
import BurgerMenu from "components/BurgerMenu";

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <BurgerMenu />
    </HeaderContainer>
  );
};

export default Header;
