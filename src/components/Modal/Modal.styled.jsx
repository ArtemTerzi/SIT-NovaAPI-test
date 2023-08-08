import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;

  transform: translateX(100%);
  transition: all 300ms ease-in-out;

  &[open] {
    transform: translateX(0);
  }
`;
