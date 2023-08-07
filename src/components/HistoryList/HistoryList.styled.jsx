import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  height: 280px;
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

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondary};
    scale: 1.15;
  }
`;
