import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  width: 100%;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  font-size: 20px;
  color: white;

  @media ${selectTablet} {
    width: 600px;
  }
`;
