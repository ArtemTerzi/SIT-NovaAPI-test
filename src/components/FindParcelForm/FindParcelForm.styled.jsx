import styled from "@emotion/styled";

export const Form = styled.form`
  position: relative;
  width: 600px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 120px 12px 24px;
  border: 1px solid indigo;
  border-radius: 12px;

  font-size: 26px;

  &:focus {
    box-shadow: 0 9px 15px #858585;
  }

  &::placeholder {
    font-size: 16px;
  }
`;
