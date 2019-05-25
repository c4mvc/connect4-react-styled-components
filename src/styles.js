import styled from "styled-components";

const CircleBase = styled.div`
  border-radius: 50%;
`;

export const CircleRed = styled(CircleBase)`
  width: 50px;
  height: 50px;
  background: red;
  border: 3px solid red;
  margin: auto;
`;

export const CircleYellow = styled(CircleBase)`
  width: 50px;
  height: 50px;
  background: yellow;
  border: 3px solid yellow;
  margin: auto;
`;
