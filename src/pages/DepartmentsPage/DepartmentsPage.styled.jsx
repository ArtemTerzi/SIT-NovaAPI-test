import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 0;
`;

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 16px;

  color: white;
  text-shadow: ${({ theme }) => theme.shadow.title};
`;
