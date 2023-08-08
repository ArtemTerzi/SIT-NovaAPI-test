import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
`;

export const PageTitle = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  color: white;
  text-shadow: ${({ theme }) => theme.shadow.title};

  font-size: 28px;
  font-style: italic;
`;

export const DeatailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${selectTablet} {
    flex-direction: row;
  }
`;
