import photo from "assets/developer/dev.png";
import bg from "assets/developer/bg.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <div>
            <img src={photo} alt="Developer" width={40} height={40} />
            <img src={bg} alt="Color abstraction" width={40} height={40} />
          </div>
        </div>
        <div>
          <div>Artem Terzi</div>
          <div>Fullstack developer</div>
          <a
            href="https://github.com/ArtemTerzi"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
