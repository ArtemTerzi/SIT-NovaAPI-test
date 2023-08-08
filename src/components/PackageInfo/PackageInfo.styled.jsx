import styled from "@emotion/styled";
import { selectDesktop, selectTablet } from "utils/selectMediaReq";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 350px;

  border: 1px solid white;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  overflow: hidden;

  @media ${selectTablet} {
    width: 400px;
  }

  @media ${selectDesktop} {
    width: 600px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 12px;

  font-size: 20px;
  color: white;
`;
