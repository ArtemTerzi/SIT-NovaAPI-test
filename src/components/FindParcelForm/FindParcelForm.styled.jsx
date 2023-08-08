import styled from "@emotion/styled";
import { selectTablet } from "utils/selectMediaReq";

export const Container = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  display: flex;

  @media ${selectTablet} {
    max-width: 600px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 60px 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;

  font-size: 18px;

  &:focus {
    box-shadow: 0 9px 15px #858585;
  }

  &::placeholder {
    font-size: 18px;

    @media ${selectTablet} {
      font-size: 20px;
    }
  }

  @media ${selectTablet} {
    font-size: 26px;
    padding: 12px 120px 12px 24px;
  }
`;

export const IconWrapper = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;

  transform: translateY(-50%);
  @media ${selectTablet} {
    display: none;
  }
`;
