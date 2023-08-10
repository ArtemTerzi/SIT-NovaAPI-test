import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const Home = styled.div`
  display: flex;
  justify-content: center;

  @media ${selectTablet} {
    margin: -40px 0;
  }
`;

export const AdditionalInfo = styled.div`
  padding: 16px;
  max-width: 600px;
  text-align: center;

  background-color: white;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const AboutDeveloper = styled.div`
  position: relative;
  height: 200px;
`;

export const TS = styled.div`
  max-width: 600px;

  margin-top: 12px;
  text-align: start;
`;
