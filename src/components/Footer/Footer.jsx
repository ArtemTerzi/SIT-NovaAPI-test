import Icon from "components/Icon";
import { FooterContainer, SocialLink, Socials } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Socials>
        <SocialLink
          href="https://www.linkedin.com/in/artem-terzi/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon iconName="icon-linkedin" width="32" height="32" />
        </SocialLink>
        <SocialLink
          href="https://github.com/ArtemTerzi"
          target="_blank"
          rel="noreferrer"
        >
          <Icon iconName="icon-github" width="32" height="32" />
        </SocialLink>
      </Socials>
    </FooterContainer>
  );
};

export default Footer;
