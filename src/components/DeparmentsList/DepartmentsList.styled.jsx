import styled from "@emotion/styled";
import { selectPhone } from "utils/selectMediaReq";

export const CitiesFormWrapper = styled.div`
  width: 100%;

  @media ${selectPhone} {
    max-width: 600px;
  }
`;

export const CityInput = styled.input`
  width: 100%;
  font-size: 24px;
  padding: 12px 12px 12px 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;

  &::placeholder {
    font-size: 20px;
  }

  &:not(:placeholder-shown) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 600px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: none;
  overflow-y: auto;
`;

export const Item = styled.li`
  padding: 6px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
