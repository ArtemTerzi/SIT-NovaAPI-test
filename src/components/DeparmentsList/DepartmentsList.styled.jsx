import styled from "@emotion/styled";

export const CitiesFormWrapper = styled.div`
  width: 600px;
`;

export const CityInput = styled.input`
  width: 600px;
  font-size: 24px;
  padding: 12px 12px 12px 24px;
  border: 1px solid indigo;
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
  width: 600px;
  max-height: 600px;

  border: 1px solid indigo;
  border-top: none;
  overflow-y: auto;
`;

export const Item = styled.li`
  padding: 6px 12px;
  border-bottom: 1px solid indigo;

  &:focus,
  &:hover {
    background-color: indigo;
    color: white;
  }
`;
