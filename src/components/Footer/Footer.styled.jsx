import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  @media ${selectTablet} {
    align-items: center;
    height: 90px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 30px;
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${({ theme }) => theme.colors.primary};
  transition: all 300ms linear;

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.secondary};
    scale: 1.2;
  }
`;
