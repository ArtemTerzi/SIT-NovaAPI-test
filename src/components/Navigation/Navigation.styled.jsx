import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { selectTablet } from "utils/selectMediaReq";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  width: 100%;

  margin-top: 8px;
  margin-bottom: 8px;

  @media ${selectTablet} {
    justify-content: center;
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  display: block;
  padding: 10px 10px;
  border-radius: 12px;

  &::after {
    content: "";
    height: 2px;
    display: block;
    width: 100%;
    scale: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: scale 300ms linear;
  }

  &:hover::after,
  &:focus::after {
    scale: 1;
  }
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  padding: 10px 10px;
  color: black;

  font-size: 24px;
  font-weight: 700;

  transition: scale 300ms linear;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    // border-bottom: 2px dashed ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    scale: 1.2;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    scale: 1.3;
  }
`;
