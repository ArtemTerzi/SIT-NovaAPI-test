import styled from "@emotion/styled";
import { selectDesktop, selectPhone, selectTablet } from "utils/selectMediaReq";

export const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;

  @media ${selectPhone} {
    min-width: 320px;
  }

  @media ${selectTablet} {
    padding: 0 32px;
    min-width: 768px;
  }

  @media ${selectDesktop} {
    min-width: 1280px;
    padding: 0 16px;
  }
`;
