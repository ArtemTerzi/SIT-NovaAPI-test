import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 300px;
  height: 350px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;

  overflow-y: auto;
  overflow-x: hidden;

  color: white;
`;

export const SearchesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 12px;
`;

export const SearchesListItem = styled.li`
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: color 200ms linear, scale 200ms linear;

  &:hover,
  &:focus {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    scale: 1.15;
  }
`;
