import photo from "assets/developer/dev.png";
import bg from "assets/developer/bg.jpg";
import {
  Avatar,
  Circle,
  Container,
  ContainerInner,
  Divider,
  DevContainer,
  Name,
  Person,
  TitlePosition,
} from "./DevInfo.styled";

const DevInfo = () => {
  return (
    <DevContainer>
      <Person>
        <Container>
          <ContainerInner>
            <Circle src={bg} alt="Color abstraction" width={40} height={40} />
            <Avatar src={photo} alt="Developer" width={40} height={40} />
          </ContainerInner>
        </Container>
        <Divider>
          <Name>Artem Terzi</Name>
          <TitlePosition>Fullstack developer</TitlePosition>
        </Divider>
      </Person>
    </DevContainer>
  );
};

export default DevInfo;
