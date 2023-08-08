import styled from "@emotion/styled";

export const DevContainer = styled.div`
  position: absolute;
  left: 100px;
  bottom: 100px;
`;

export const Person = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 74px;
  position: relative;

  transform: scale(0.55);

  &:hover > div:last-child {
    opacity: 1;
  }
`;

export const Container = styled.div`
  border-radius: 50%;
  height: 50px;
  -webkit-tap-highlight-color: transparent;
  transform: scale(0.48);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 400px;
  cursor: pointer;

  &:hover {
    transform: scale(0.54);
  }

  &:hover > div > img:last-child {
    transform: translateY(0) scale(1.2);
  }
`;

export const ContainerInner = styled.div`
  clip-path: path(
    "M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z"
  );
  position: relative;
  transform-origin: 50%;
`;

export const Avatar = styled.img`
  pointer-events: none;
  position: relative;
  transform: translateY(20px) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  left: 22px;
  top: 164px;
  overflow: hidden;
  width: 340px;
`;

export const Circle = styled.img`
  background-color: #fee7d3;
  border-radius: 50%;
  cursor: pointer;
  height: 380px;
  left: 10px;
  pointer-events: none;
  position: absolute;
  top: 210px;
  width: 380px;
`;

export const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  display: flex;
  padding: 6px;
  flex-direction: column;
  width: 250px;
  justify-content: center;
  align-items: center;
  background-color: rgba(225, 225, 225, 0.6);
  border: 1px solid yellow;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

export const Name = styled.div`
  margin-top: 10px;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  color: #404245;
`;

export const TitlePosition = styled.div`
  font-size: 26px;
  font-style: italic;
  margin-top: 4px;
  color: #6e6e6e;
`;
