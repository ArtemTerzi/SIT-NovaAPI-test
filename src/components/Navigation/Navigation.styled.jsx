import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { selectTablet } from "utils/selectMediaReq";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  margin-top: 8px;
  margin-bottom: 8px;

  @media ${selectTablet} {
    justify-content: center;
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  padding: 10px 10px;

  &:hover,
  &:focus {
    background-color: #e2e2e2;
    border-radius: 12px;
  }
`;

export const NavItemLink = styled(NavLink)`
  padding: 10px 10px;
  color: black;

  font-size: 24px;
  font-weight: 700;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px dashed ${({ theme }) => theme.colors.secondary};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
