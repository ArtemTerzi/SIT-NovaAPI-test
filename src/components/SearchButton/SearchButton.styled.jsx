import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const Button = styled.button`
  display: none;

  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  padding: 12px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};

  font-size: 20px;

  color: white;

  @media ${selectTablet} {
    display: flex;
    align-items: center;
  }
`;
