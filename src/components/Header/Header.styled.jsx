import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  @media ${selectTablet} {
    align-items: center;
    height: 90px;
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  display: none;

  @media ${selectTablet} {
    display: flex;
    justify-content: space-around;
  }
`;
