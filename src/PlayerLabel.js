import React, { Component } from "react";
import styled from "styled-components";

const CircleBase = styled.div`
  border-radius: 50%;
`;

const CircleRed = styled(CircleBase)`
  width: 50px;
  height: 50px;
  background: red;
  border: 3px solid red;
  margin: auto;
`;

const CircleYellow = styled(CircleBase)`
  width: 50px;
  height: 50px;
  background: yellow;
  border: 3px solid yellow;
  margin: auto;
`;

export default class PlayerLabel extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Player1</h3>
          <CircleRed />
        </div>
        <div className="col-md-3">
          <h3>Player2</h3>
          <CircleYellow />
        </div>
      </div>
    );
  }
}
