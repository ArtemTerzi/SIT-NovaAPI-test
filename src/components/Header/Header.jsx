import Navigation from "components/Navigation";
import { HeaderContainer, NavigationWrapper } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
    </HeaderContainer>
  );
};

export default Header;
