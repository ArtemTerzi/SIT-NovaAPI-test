import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

export const PageTitle = styled.h2`
  margin-bottom: 16px;
  text-align: center;

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
