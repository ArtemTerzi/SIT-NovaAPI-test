import styled from "@emotion/styled";
import { selectDesktop, selectPhone, selectTablet } from "utils/selectMediaReq";
import bg from "assets/images/bg.jpg";

export const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  min-height: 700px;
  padding: 32px 12px;
  background-image: linear-gradient(
      rgba(92, 211, 169, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${selectPhone} {
    min-width: 320px;
  }

  @media ${selectTablet} {
    padding: 60px 32px;
    min-width: 768px;
  }

  @media ${selectDesktop} {
    min-width: 1280px;
    padding: 80px 16px;
  }
`;
