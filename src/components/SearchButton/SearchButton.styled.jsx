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

  color: white;
  font-weight: 700;
  font-size: 20px;

  transition: color 300ms linear, background-color 300ms linear;

  @media ${selectTablet} {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
