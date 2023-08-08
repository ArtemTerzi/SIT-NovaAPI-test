import styled from "@emotion/styled";
import bg from "assets/images/bg.jpg";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(75, 0, 130, 0.7)
    ),
    url(${bg});
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;

  transform: translateX(100%);
  transition: all 300ms ease-in-out;

  &[open] {
    transform: translateX(0);
  }
`;
