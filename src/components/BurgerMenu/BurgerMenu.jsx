import Icon from "components/Icon";
import { IconWrapper } from "./BurgerMenu.styled";

const BurgerMenu = () => {
  return (
    <IconWrapper>
      <Icon
        iconName="icon-menu"
        fill="black"
        width="32px"
        height="32px"
        stroke="black"
      />
    </IconWrapper>
  );
};

export default BurgerMenu;
