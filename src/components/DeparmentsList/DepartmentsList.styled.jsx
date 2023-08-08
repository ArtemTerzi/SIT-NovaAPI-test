import styled from "@emotion/styled";
import { selectPhone, selectTablet } from "utils/selectMediaReq";

export const CitiesFormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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

  @media ${selectPhone} {
    width: 290px;
  }

  @media ${selectTablet} {
    width: 600px;
  }
`;

export const ItemsList = styled.ul`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  width: 600px;
  max-height: 250px;
  background-color: white;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: none;
  overflow-y: auto;

  @media ${selectPhone} {
    width: 290px;
  }

  @media ${selectTablet} {
    width: 600px;
  }
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
