import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 28px;
  right: 12px;
  transform: translateY(-50%);

  @media ${selectTablet} {
    display: none;
  }
`;
