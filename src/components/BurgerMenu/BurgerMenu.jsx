import Icon from "components/Icon";
import { IconWrapper } from "./BurgerMenu.styled";

const BurgerMenu = ({ iconName }) => {
  return (
    <IconWrapper>
      <Icon
        iconName={iconName}
        fill="black"
        width="32px"
        height="32px"
        stroke="black"
      />
    </IconWrapper>
  );
};

export default BurgerMenu;
